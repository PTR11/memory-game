import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { CardProps } from "../utils/types";
import {
   GridItem,
   Card as StyledCard,
   ClickedCard,
} from "../styles/Card.styles";

const Card: React.FC<CardProps> = ({ card, callback, isGameOver }) => {
   const handleClick = () => {
      if (!card.clicked) callback(card);
   };

   return (
      <GridItem onClick={handleClick}>
         {!card.clicked && !isGameOver ? (
            <StyledCard gameOver={isGameOver}>
               <FontAwesomeIcon
                  icon={faQuestion}
                  size="2xl"
                  fontWeight={100}
                  data-testid="fa-question"
               />
            </StyledCard>
         ) : (
            <ClickedCard gameOver={isGameOver}>{card.image}</ClickedCard>
         )}
      </GridItem>
   );
};

export default Card;
