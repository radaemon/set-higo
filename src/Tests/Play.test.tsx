import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Play from '../pages/Play/Play';

describe('Play component', () => {
  test('When rendering for the first time it displays 12 cards.', () => {
    render(<Play />, { wrapper: MemoryRouter });
    const cards = screen.getAllByLabelText(/card/i);
    expect(cards.length).toBe(12);
  });
});
