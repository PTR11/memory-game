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