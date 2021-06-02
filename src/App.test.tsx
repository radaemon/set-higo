import React from 'react';
import { render, screen } from '@testing-library/react';
import type { DeckObject } from './functions/createDeck';
import App from './App';
import createDeck from './functions/createDeck';
import isSet from './functions/isSet';
import {
  realSet as realMockSet,
  fakeSet as fakeMockSet,
} from './mocks/mockSet';

describe('Helper Functions', () => {
  test('Create deck makes 81 card objects.', () => {
    const deck = createDeck();
    expect(deck.length).toEqual(81);
  });
  test('Verifies mock set to be truthy', () => {
    expect(isSet(realMockSet)).toBeTruthy();
  });
  test('Verifies mock !set to be falsy', () => {
    expect(isSet(fakeMockSet)).toBeFalsy();
  });
});
