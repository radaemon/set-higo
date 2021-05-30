import React from 'react';

import './styles.scss';

type Props = {
  color: Number;
  shape: Number;
  texture: Number;
  quantity: Number;
  isSelected: Boolean;
};

const Card = ({ color, shape, texture, quantity, isSelected }: Props) => {
  const assemblyLine1 = buildShape(shape);
  const assemblyLine2 = setTexture(assemblyLine1, texture);
  const assemblyLine3 = setPaint(assemblyLine2, color);
  const assemblyLine4 = setAmount(assemblyLine3, quantity);
};

export default Card;
