import { CardType } from "./types";


const allAnimalEmojis = [
   "🦊", "🐶", "🐱", "🐭", "🐰", "🐵", "🐻", "🐼", "🐨", "🐯",
   "🦁", "🐷", "🐸", "🐔", "🐧", "🐦", "🐤", "🐺", "🦄", "🐝",
   "🐞", "🦋", "🐢", "🐍", "🐙", "🦑", "🦀", "🐡", "🐬", "🐳",
];

export const getRandomEmojis = (count: number): string[] => {
   const shuffled = allAnimalEmojis.sort(() => Math.random() - 0.5); // Shuffle the array
   return shuffled.slice(0, count); // Take the first `count` emojis
};

const shuffleArray = (arr: any[]): any[] => {
   return arr
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
};

const createBoard = (cards: CardType[], images:string[]): CardType[] =>
   [...cards, ...cards].map((card, i) => ({
      ...card,
      id: `${i}`,
      image: i < cards.length ? `${images[i]}` : `${images[i - cards.length]}`,
      matchingCardId:
         i < cards.length ? `${i + cards.length}` : `${i - cards.length}`,
   }));

export const initializeBoard = (images:string[]): CardType[] => {
   const initialCards: CardType[] = Array.from(
      { length: images.length },
      (_, index) => ({
         id: `${index}`,
         image: images[index],
         clicked: false,
         matchingCardId: "",
         matched: false,
      })
   );
   return shuffleArray(createBoard(initialCards,images)); // Shuffle and set the cards
}
