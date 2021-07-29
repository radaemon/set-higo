import type { CardObject } from '../types/types';

function shuffleDeck(cardArr: CardObject[]) {
  const [...arr] = cardArr;
  for (let i = cardArr.length - 1; i > 0; i--) {
    const randomInteger = Math.floor(Math.random() * cardArr.length);
    const temp = arr[i];
    arr[i] = arr[randomInteger];
    arr[randomInteger] = temp;
  }
  return arr;
}

export default shuffleDeck;
