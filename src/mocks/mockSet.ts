import { SetTuple } from '../types/types';

const realSet: SetTuple = [
  {
    color: 1,
    quantity: 1,
    shape: 3,
    texture: 2,
  },
  {
    color: 2,
    quantity: 1,
    shape: 3,
    texture: 2,
  },
  {
    color: 3,
    quantity: 1,
    shape: 3,
    texture: 2,
  },
];

const fakeSet: SetTuple = [
  {
    color: 3,
    quantity: 1,
    shape: 2,
    texture: 2,
  },
  {
    color: 2,
    quantity: 1,
    shape: 3,
    texture: 2,
  },
  {
    color: 3,
    quantity: 1,
    shape: 3,
    texture: 1,
  },
];

export { realSet, fakeSet };
