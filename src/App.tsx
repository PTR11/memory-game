import React from "react";
import logo from "./images/logo.svg";
import Card from "./Card";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { CardType } from "./utils/types";
import { initializeBoard, getRandomEmojis } from "./utils/boardInitialization";
import Settings from "./Settings";

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
      setMatchedCards(0);
      setMistakes(0);
      setTimeLeft(60); // Reset timer to 60 seconds
      setGameOver(false);
      images = getRandomEmojis(pairs);
      setGameCards(initializeBoard(images)); // Reset the game board
   };

   const handleSave = (pairs: number, countdown: number) => {
      setPairs(pairs);
      setTimeLeft(countdown);
      setIsSettingsOpen(false);
      setGameOver(false);
      images = getRandomEmojis(pairs);
      setGameCards(initializeBoard(images)); // Get random emojis based on pairs
   };

   // Example: Initialize and shuffle cards
   React.useEffect(() => {
      if (timeLeft === 0 && !gameOver) {
         setGameOver(true); // Mark the game as over
         alert("Time's up! Game over."); // Show the alert only once
      } else if (timeLeft > 0 && !gameOver) {
         const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
         }, 1000); // Decrease time every second

         return () => clearInterval(intervalId); // Cleanup the interval
      }
   }, [timeLeft, gameOver]);

   React.useEffect(() => {
      setGameCards(initializeBoard(images)); // Initialize the game board with random emojis
   }, [pairs]);

   const handleCardClick = (card: CardType) => {
      if (gameOver) return;

      setGameCards((prevCards) => {
         const updatedCards = prevCards.map((c) =>
            c.id === card.id ? { ...c, clicked: !c.clicked } : c
         );
         // Check for a match after updating the clicked state
         const clickedCards = updatedCards.filter(
            (c) => c.clicked && !c.matched
         );

         if (clickedCards.length === 2) {
            const [firstCard, secondCard] = clickedCards;

            if (firstCard.matchingCardId === secondCard.id) {
               // Match found
               setMatchedCards(matchedCards + 1);
               if (matchedCards + 1 === images.length) {
                  alert("You win!");
               }
               return updatedCards.map((c) =>
                  c.id === firstCard.id || c.id === secondCard.id
                     ? { ...c, matched: true }
                     : c
               );
            } else {
               setMistakes(mistakes + 1);
               // No match, flip back after a delay
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
      <div className="App">
         <header className="App-header">
            <div className="App-title">
               <img src={logo} className="App-logo" alt="logo" />
               <div className="App-status">
                  <div className="App-status-timer">{timeLeft}</div>
                  <table className="App-status-text">
                     <tbody>
                        <tr>
                           <td>{matchedCards} matches</td>
                        </tr>
                        <tr>
                           <td>{mistakes} mistakes</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <div className="App-controls">
               <FontAwesomeIcon
                  icon={faGear}
                  className="App-settings"
                  size="xl"
                  onClick={openSettings}
               />
               <FontAwesomeIcon
                  icon={faRepeat}
                  className="App-reset"
                  size="xl"
                  onClick={resetGame}
               />
            </div>
         </header>
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
         <div className="grid-container">
            {gameCards.map((card) => (
               <Card key={card.id} card={card} callback={handleCardClick} />
            ))}
         </div>
      </div>
   );
}

export default App;
