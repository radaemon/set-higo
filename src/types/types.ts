type SetTuple = [DeckObject, DeckObject, DeckObject];

type DeckObject = {
  color: 1 | 2 | 3;
  quantity: 1 | 2 | 3;
  shape: 1 | 2 | 3;
  texture: 1 | 2 | 3;
};
export type { SetTuple, DeckObject };
