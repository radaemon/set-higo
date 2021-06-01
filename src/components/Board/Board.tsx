/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '../Card/Card';
import type { DeckObject } from '../../functions/createDeck';

import './styles.scss';

type Props = {
  shownCards: DeckObject[];
  toggleBuffer: (
    i: number,
    buffer: number[],
    bufSetter: React.Dispatch<number[]>
  ) => void;
  cardBuffer: number[];
  setCardBuffer: React.Dispatch<React.SetStateAction<number[]>>;
};

const Board = ({
  shownCards,
  toggleBuffer,
  cardBuffer,
  setCardBuffer,
}: Props) => {
  const cards = shownCards.map((card, i) => (
    <Card
      color={card.color}
      quantity={card.quantity}
      shape={card.shape}
      texture={card.texture}
      index={i}
      cardBuffer={cardBuffer}
      setCardBuffer={setCardBuffer}
      toggleBuffer={toggleBuffer}
      key={i}
    />
  ));
  return <div className="board">{cards}</div>;
};

export default Board;
