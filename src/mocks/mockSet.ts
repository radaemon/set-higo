import { SetTuple } from '../types/types';

const realSet: SetTuple = [
  {
    color: 1,
    quantity: 1,
    shape: 3,
    texture: 2,
    visibility: true,
  },
  {
    color: 2,
    quantity: 1,
    shape: 3,
    texture: 2,
    visibility: true,
  },
  {
    color: 3,
    quantity: 1,
    shape: 3,
    texture: 2,
    visibility: true,
  },
];

const fakeSet: SetTuple = [
  {
    color: 3,
    quantity: 1,
    shape: 2,
    texture: 2,
    visibility: true,
  },
  {
    color: 2,
    quantity: 1,
    shape: 3,
    texture: 2,
    visibility: true,
  },
  {
    color: 3,
    quantity: 1,
    shape: 3,
    texture: 1,
    visibility: true,
  },
];

export { realSet, fakeSet };
