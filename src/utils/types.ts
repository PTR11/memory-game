export type TimerType = {
   timeLeft: number;
   setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
};

export type GameOverType = {
   gameOver: boolean;
   setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CardType = {
   id: string;
   image: string;
   clicked: boolean;
   matchingCardId: string;
   matched: boolean;
};

export interface CardProps {
   isGameOver: boolean;
   card: CardType;
   callback: (card: CardType) => void;
}

export interface SettingsProps {
   isOpen: boolean;
   onClose: () => void;
   pairs: number;
   setPairs: (pairs: number) => void;
   countdown: number;
   setCountdown: (countdown: number) => void;
   onSave: (pairs: number, countdown: number) => void;
}

export interface StatusProps {
   matchedCards: number;
   mistakes: number;
   timeLeft: number;
}
