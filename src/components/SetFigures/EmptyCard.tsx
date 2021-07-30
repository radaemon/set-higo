import React from 'react';

type Props = {
  color: string;
  quantity: number;
};

export default function EmptyCard({ color, quantity }: Props) {
  return <div></div>;
}
