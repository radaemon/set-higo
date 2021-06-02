import type { DeckObject } from '../types/types';

const createDeck = () => {
  const deck: DeckObject[] = [];

  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      for (let k = 1; k <= 3; k++) {
        for (let m = 1; m <= 3; m++) {
          if (
            (i === 1 || i === 2 || i === 3) &&
            (j === 1 || j === 2 || j === 3) &&
            (k === 1 || k === 2 || k === 3) &&
            (m === 1 || m === 2 || m === 3)
          ) {
            deck.push({
              quantity: i,
              color: j,
              shape: k,
              texture: m,
            });
          }
        }
      }
    }
  }
  return deck;
};

export default createDeck;
