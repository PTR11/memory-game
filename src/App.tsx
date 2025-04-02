import React from "react";
import logo from "./images/logo.svg";
import Card from "./components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { CardType } from "./utils/types";
import { initializeBoard, getRandomEmojis } from "./utils/boardInitialization";
import Settings from "./components/Settings";
import Status from "./components/Status";
import {
   AppContainer,
   AppHeader,
   AppTitle,
   AppLogo,
   AppControls,
   AppSettings,
   AppReset,
   GridContainer,
} from "./styles/App.styles";

function App() {
   const [gameCards, setGameCards] = React.useState<CardType[]>([]);
   const [matchedCards, setMatchedCards] = React.useState<number>(0);
   const [mistakes, setMistakes] = React.useState<number>(0);
   const [timeLeft, setTimeLeft] = React.useState<number>(60); // Timer starts at 60 seconds
   const [gameOver, setGameOver] = React.useState<boolean>(false);
   const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);
   const [pairs, setPairs] = React.useState(12);
   let images = getRandomEmojis(pairs);

   const openSettings = () => {
      setIsSettingsOpen(true);
      setGameOver(true);
   };

   const closeSettings = () => {
      setGameOver(false);
      setIsSettingsOpen(false);
   };

   const resetGame = () => {
      // Reset the game state
      setMatchedCards(0);
      setMistakes(0);
      setTimeLeft(60);
      setGameOver(false);
      images = getRandomEmojis(pairs);
      setGameCards(initializeBoard(images));
   };

   const handleSave = (pairs: number, countdown: number) => {
      // In case of saving settings, reset the game with new settings
      setMatchedCards(0);
      setMistakes(0);
      setPairs(pairs);
      setTimeLeft(countdown);
      setIsSettingsOpen(false);
      setGameOver(false);
      images = getRandomEmojis(pairs);
      setGameCards(initializeBoard(images));
   };

   React.useEffect(() => {
      if (timeLeft === 0 && !gameOver) {
         // Mark the game as over
         setGameOver(true);
         alert("Time's up! Game over.");
      } else if (timeLeft > 0 && !gameOver) {
         const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
         }, 1000); // Decrease time every second

         return () => clearInterval(intervalId); // Cleanup the interval
      }
   }, [timeLeft, gameOver]);

   React.useEffect(() => {
      // Initialize the game board with random emojis
      setGameCards(initializeBoard(images));
   }, [pairs]);

   React.useEffect(() => {
      if (matchedCards === images.length) {
         alert("You win!");
         setGameOver(true);
      }
   }, [matchedCards]);

   const handleCardClick = (card: CardType) => {
      if (gameOver || card.clicked || card.matched) return;

      setGameCards((prevCards) => {
         const updatedCards = prevCards.map((c) =>
            c.id === card.id ? { ...c, clicked: !c.clicked } : c
         );

         const clickedCards = updatedCards.filter(
            (c) => c.clicked && !c.matched
         );

         if (clickedCards.length === 2) {
            const [firstCard, secondCard] = clickedCards;

            if (firstCard.matchingCardId === secondCard.id) {
               // Match found
               setMatchedCards(matchedCards + 1);
               return updatedCards.map((c) =>
                  c.id === firstCard.id || c.id === secondCard.id
                     ? { ...c, matched: true }
                     : c
               );
            } else {
               //No match
               setMistakes(mistakes + 1);
               // Unflip cards after a short delay
               setTimeout(() => {
                  setGameCards((prevCards) =>
                     prevCards.map((c) =>
                        c.id === firstCard.id || c.id === secondCard.id
                           ? { ...c, clicked: false }
                           : c
                     )
                  );
               }, 500);
            }
         }
         return updatedCards;
      });
   };

   return (
      <AppContainer>
         <AppHeader>
            <AppTitle>
               <AppLogo src={logo} alt="logo" />
               <Status
                  matchedCards={matchedCards}
                  mistakes={mistakes}
                  timeLeft={timeLeft}
               />
            </AppTitle>
            <AppControls>
               <AppSettings>
                  <FontAwesomeIcon
                     icon={faGear}
                     size="xl"
                     onClick={openSettings}
                  />
               </AppSettings>
               <AppReset>
                  <FontAwesomeIcon
                     icon={faRepeat}
                     size="xl"
                     onClick={resetGame}
                  />
               </AppReset>
            </AppControls>
         </AppHeader>
         {isSettingsOpen && (
            <Settings
               isOpen={isSettingsOpen}
               onClose={closeSettings}
               pairs={pairs}
               setPairs={setPairs}
               countdown={timeLeft}
               setCountdown={setTimeLeft}
               onSave={handleSave}
            />
         )}
         <GridContainer>
            {gameCards.map((card) => (
               <Card key={card.id} card={card} callback={handleCardClick} />
            ))}
         </GridContainer>
      </AppContainer>
   );
}

export default App;
