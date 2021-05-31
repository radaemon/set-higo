/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '../Card/Card';

type Props = {
  shownCards: {
    color: number;
    quantity: number;
    shape: number;
    texture: number;
  }[];
  // selectedCards: object[];
};

const Board = ({ shownCards }: Props) => {
  const cards = shownCards.map((card, i) => (
    <Card
      color={card.color}
      quantity={card.quantity}
      shape={card.shape}
      texture={card.texture}
      key={i}
      isSelected={false}
    />
  ));
  return <div>{cards}</div>;
};

export default Board;
