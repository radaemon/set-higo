import React, { useState } from 'react';
import { components, colors, CardObject } from '../../types/types';

import './styles.scss';

type Props = {
  card: CardObject;
  index: number;
  toggleBuffer: (i: number) => void;
};

const Card = ({ card, index, toggleBuffer }: Props) => {
  const [cardSelected, setCardSelected] = useState(false);
  const stringColor = colors[card.color];
  const ComponentToRender = components[`${card.shape}${card.texture}` as const];

  const chooseCard = () => {
    toggleBuffer(index);
    setCardSelected(!cardSelected);
  };

  return (
    <div
      className={!cardSelected ? 'card' : 'card toggled'}
      aria-label={`card-${card.color}-${card.quantity}-${card.shape}-${card.texture}`}
      role="button"
      aria-pressed={cardSelected}
      tabIndex={0}
      onClick={chooseCard}
      onKeyPress={chooseCard}
    >
      <ComponentToRender color={stringColor} quantity={card.quantity} />
    </div>
  );
};

export default Card;
