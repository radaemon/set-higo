import React from 'react';
import {
  cleanup,
  fireEvent,
  Matcher,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Play from '../pages/Play/Play';
import { CardObject } from '../types/types';
import { findFirstSetIndices } from '../functions/findAllSets';

function domNodesToCardObjectArr(domCards: HTMLElement[]) {
  return domCards.map((card) => {
    const each = card
      .getAttribute('aria-label')
      ?.split(' ')[0]
      .split('') as string[];
    return {
      color: Number(each[0]),
      quantity: Number(each[1]),
      shape: Number(each[2]),
      texture: Number(each[3]),
    } as CardObject;
  });
}

afterEach(cleanup);

describe('Play component', () => {
  test('When rendering for the first time it displays 12 cards.', () => {
    render(<Play />, { wrapper: MemoryRouter });
    const cards = screen.getAllByLabelText(/\d\d\d\d/i);
    expect(cards.length).toBe(12);
  });
  test('When user clicks a card aria and className switch accordingly.', () => {
    render(<Play />, { wrapper: MemoryRouter });
    const card = screen.getAllByLabelText(/\d\d\d\d/i);

    fireEvent.click(card[0]);
    expect(card[0]).toHaveAttribute('aria-pressed', 'true');
    expect(card[0]).toHaveAttribute('class', 'card toggled');

    fireEvent.click(card[0]);
    expect(card[0]).toHaveAttribute('aria-pressed', 'false');
    expect(card[0]).toHaveAttribute('class', 'card');
  });
  test('New cards are dealt when selecting a set.', async () => {
    render(<Play />, { wrapper: MemoryRouter });
    let ariaLCardThatWillChange: Matcher;
    const domCards = screen.getAllByLabelText(/\d\d\d\d/i);
    const cardObjArr = domNodesToCardObjectArr(domCards);
    const firstFoundSet = findFirstSetIndices(cardObjArr);
    if (firstFoundSet) {
      ariaLCardThatWillChange = domCards[firstFoundSet[0]].getAttribute(
        'aria-label'
      ) as Matcher;
      fireEvent.click(domCards[firstFoundSet[0]]);
      fireEvent.click(domCards[firstFoundSet[1]]);
      fireEvent.click(domCards[firstFoundSet[2]]);
      waitFor(() =>
        expect(
          screen.queryByLabelText(ariaLCardThatWillChange)
        ).not.toBeInTheDocument()
      );
    }
  });
});
