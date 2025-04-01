import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { CardType } from "./utils/types";

interface CardProps {
   card: CardType;
   callback: (card: CardType) => void;
}

const Card: React.FC<CardProps> = ({ card, callback }) => {
   const handleClick = () => {
      if (!card.clicked) callback(card);
   };

   return (
      <div className="grid-item" onClick={handleClick}>
         <div className={`card ${card.clicked ? "clicked" : ""}`}>
            {!card.clicked ? (
               <FontAwesomeIcon
                  icon={faQuestion}
                  size="2xl"
                  fontWeight={100}
                  data-testid="fa-question"
               />
            ) : (
               <p style={{ fontSize: "3rem" }}>{card.image}</p>
            )}
         </div>
      </div>
   );
};

export default Card;
