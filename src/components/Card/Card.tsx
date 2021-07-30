import React, { useState } from 'react';
import { components, colors } from '../../types/types';

import './styles.scss';

type Props = {
  color: 1 | 2 | 3;
  quantity: 1 | 2 | 3;
  shape: 1 | 2 | 3;
  texture: 1 | 2 | 3;
  index: number;
  toggleBuffer: (
    i: number,
    buffer: number[],
    bufSetter: React.Dispatch<number[]>
  ) => void;
  cardBuffer: number[];
  setCardBuffer: React.Dispatch<React.SetStateAction<number[]>>;
};

const Card = ({
  color,
  shape,
  texture,
  quantity,
  index,
  toggleBuffer,
  cardBuffer,
  setCardBuffer,
}: Props) => {
  const [ariaPressed, setAriaPressed] = useState(false);
  const stringColor = colors[color];
  const ComponentToRender = components[`${shape}${texture}` as const];

  const chooseCard = () => {
    toggleBuffer(index, cardBuffer, setCardBuffer);
    setAriaPressed(!ariaPressed);
  };

  return (
    <div
      className={!cardBuffer.includes(index) ? 'card' : 'card toggled'}
      aria-label={`card-${color}-${quantity}-${shape}-${texture}`}
      role="button"
      aria-pressed={ariaPressed}
      tabIndex={0}
      onClick={chooseCard}
      onKeyPress={chooseCard}
    >
      <ComponentToRender color={stringColor} quantity={quantity} />
    </div>
  );
};

export default Card;
