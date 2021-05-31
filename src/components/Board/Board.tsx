/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '../Card/Card';

type Props = {
  shownCards: {
    color: 1 | 2 | 3;
    quantity: 1 | 2 | 3;
    shape: 1 | 2 | 3;
    texture: 1 | 2 | 3;
  }[];
};

const Board = ({ shownCards }: Props) => {
  const cards = shownCards.map((card, i) => (
    <Card
      color={card.color}
      quantity={card.quantity}
      shape={card.shape}
      texture={card.texture}
      key={i}
    />
  ));
  return (
    <div
      className="board"
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        maxWidth: '30%',
      }}
    >
      {cards}
    </div>
  );
};

export default Board;
