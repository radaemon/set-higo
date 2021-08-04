import React from 'react';
import { components, colors, CardObject } from '../../types/types';

import './styles.scss';

type Props = {
  card: CardObject;
  index: number;
  cardBuffer: number[];
  toggleBuffer: (i: number) => void;
};

const Card = ({ card, index, cardBuffer, toggleBuffer }: Props) => {
  const cardColor = colors[card.color];
  const ComponentToRender = components[`${card.shape}${card.texture}` as const];

  const chooseCard = () => {
    if (!card.visibility) return;
    toggleBuffer(index);
  };

  function getClassName() {
    if (!card.visibility) return 'card hidden';
    if (cardBuffer.includes(index)) return 'card toggled';
    return 'card';
  }

  return (
    <div
      className={getClassName()}
      aria-label={`${card.color}${card.quantity}${card.shape}${card.texture} color-quantity-shape-texture`}
      role="button"
      aria-pressed={cardBuffer.includes(index)}
      tabIndex={0}
      onClick={chooseCard}
      onKeyPress={chooseCard}
    >
      <ComponentToRender color={cardColor} quantity={card.quantity} />
    </div>
  );
};

export default Card;
