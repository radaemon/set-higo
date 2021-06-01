/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

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
import type { DeckObject } from '../../functions/createDeck';

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

const Card = ({ color, shape, texture, quantity }: DeckObject) => {
  const stringColor = colors[color];
  const ComponentToRender = components[`${shape}${texture}` as const];

  const [toggled, setToggled] = useState(false);

  return (
    <div
      className={!toggled ? 'card' : 'card toggled'}
      onClick={() => setToggled(!toggled)}
    >
      <ComponentToRender color={stringColor} quantity={quantity} />
    </div>
  );
};

export default Card;
