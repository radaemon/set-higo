import type { CardObject, SetTuple } from '../types/types';
import isSet from './isSet';

export default function combinations(arr: CardObject[], k = 3): SetTuple[] {
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

export function findBoardSets(boardShownCards: CardObject[]) {
  const allCombinationsOfBoard = combinations(boardShownCards);

  let setsInBoard = 0;

  allCombinationsOfBoard.forEach((set) => {
    if (isSet(set)) {
      setsInBoard += 1;
    }
  });

  return setsInBoard;
}
