/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import DiamondOutlined from '../SetFigures/DiamondOutlined';
import DiamondSolid from '../SetFigures/DiamondSolid';
import DiamondStriped from '../SetFigures/DiamondStriped';
import OvalOutlined from '../SetFigures/OvalOutlined';
import OvalSolid from '../SetFigures/OvalSolid';
import OvalStriped from '../SetFigures/OvalStriped';
import SquiggleOutlined from '../SetFigures/SquiggleOutlined';
import SquiggleSolid from '../SetFigures/SquiggleSolid';
import SquiggleStriped from '../SetFigures/SquiggleStriped';

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

const components = {
  '11': OvalSolid,
  '12': OvalOutlined,
  '13': OvalStriped,
  '21': DiamondSolid,
  '22': DiamondOutlined,
  '23': DiamondStriped,
  '31': SquiggleSolid,
  '32': SquiggleOutlined,
  '33': SquiggleStriped,
} as const;

const colors = {
  1: '#fa0000',
  2: '#388b3b',
  3: '#a128d0',
} as const;

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
      onClick={() => {
        toggleBuffer(index, cardBuffer, setCardBuffer);
      }}
    >
      <ComponentToRender color={stringColor} quantity={quantity} />
    </div>
  );
};

export default Card;
