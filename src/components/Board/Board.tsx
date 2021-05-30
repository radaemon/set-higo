import React, { ReactNode } from 'react';
import Card from '../Card/Card';

type Props = {
  shownCards: Object[];
  selectedCards: Object[];
};

const Board = ({ shownCards, selectedCards }: Props) => {
  const cards = shownCards.map((card, i) => (
    <Card
      color={card.color}
      quantity={card.quantity}
      shape={card.shape}
      texture={card.texture}
      key={i}
    />
  ));
  return <div>{cards}</div>;
};

export default Board;
