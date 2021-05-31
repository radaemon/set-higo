import type { DeckObject } from './createDeck';

export default function combinations(arr: DeckObject[], k = 3): DeckObject[][] {
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
  return ret;
}
