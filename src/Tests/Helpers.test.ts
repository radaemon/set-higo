import createDeck from '../functions/createDeck';
import combinations from '../functions/findAllSets';
import isSet from '../functions/isSet';
import {
  realSet as realMockSet,
  fakeSet as fakeMockSet,
} from '../mocks/mockSet';

describe('Helper Functions', () => {
  test('Create deck makes 81 card objects.', () => {
    const deck = createDeck();
    expect(deck.length).toEqual(81);
  });
  test('Verifies mock set to be truthy and falsy', () => {
    expect(isSet(realMockSet)).toBeTruthy();
    expect(isSet(fakeMockSet)).toBeFalsy();
  });
  test('Verifies all combinations of deck amount to 85,320 (81 Choose 3)', () => {
    expect(combinations(createDeck()).length).toEqual(85320);
  });
  test('Check that cards are dealt properly (new game, new set, last card)', () => {});
});
