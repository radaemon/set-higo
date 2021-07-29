/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
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
  const stringColor = colors[color];
  const ComponentToRender = components[`${shape}${texture}` as const];

  return (
    <div
      className={!cardBuffer.includes(index) ? 'card' : 'card toggled'}
      aria-label={`card-${color}-${quantity}-${shape}-${texture}`}
      onClick={() => {
        toggleBuffer(index, cardBuffer, setCardBuffer);
      }}
    >
      <ComponentToRender color={stringColor} quantity={quantity} />
    </div>
  );
};

export default Card;
