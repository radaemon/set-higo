import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Play from '../pages/Play/Play';

afterEach(cleanup);

describe('Play component', () => {
  test('When rendering for the first time it displays 12 cards.', () => {
    render(<Play />, { wrapper: MemoryRouter });
    const cards = screen.getAllByLabelText(/card/i);
    expect(cards.length).toBe(12);
  });
  test('When user clicks a card aria and className switch accordingly.', () => {
    render(<Play />, { wrapper: MemoryRouter });
    const card = screen.getAllByLabelText(/card/i);

    fireEvent.click(card[0]);
    expect(card[0]).toHaveAttribute('aria-pressed', 'true');
    expect(card[0]).toHaveAttribute('class', 'card toggled');

    fireEvent.click(card[0]);
    expect(card[0]).toHaveAttribute('aria-pressed', 'false');
    expect(card[0]).toHaveAttribute('class', 'card');
  });
});
