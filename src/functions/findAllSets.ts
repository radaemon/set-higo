import type { CardObject, SetTuple } from '../types/types';
import isSet from './isSet';

export function combinations(arr: CardObject[], k = 3): SetTuple[] {
  const ret = [];
  let sub;
  let next;
  for (let i = 0; i < arr.length; i++) {
    if (k === 1) {
      ret.push([arr[i]]);
    } else {
      sub = combinations(arr.slice(i + 1, arr.length), k - 1);
      for (let j = 0; j < sub.length; j++) {
        next = sub[j];
        next.unshift(arr[i]);
        ret.push(next);
      }
    }
  }
  return ret as SetTuple[];
}

export function numSetsInCardObjArr(cardObjArr: CardObject[]) {
  const allCombinationsOfBoard = combinations(
    cardObjArr.filter((card) => card.visibility === true)
  );

  let setsInBoard = 0;

  allCombinationsOfBoard.forEach((set) => {
    if (isSet(set)) {
      setsInBoard += 1;
    }
  });

  return setsInBoard;
}

export function findFirstSetIndices(board: CardObject[]) {
  const allCombinationsInBoard = combinations(board);
  let indicesOfFirstSet;
  for (const setTuples of allCombinationsInBoard) {
    if (isSet(setTuples)) {
      const [card1, card2, card3] = setTuples;
      indicesOfFirstSet = [
        board.indexOf(card1),
        board.indexOf(card2),
        board.indexOf(card3),
      ];
      break;
    }
  }
  return indicesOfFirstSet;
}
