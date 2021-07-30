import React from 'react';

type Props = {
  color: string;
  quantity: number;
};

export default function OvalSolid({ color, quantity }: Props) {
  const figure = (idx: number) => (
    <svg
      key={idx}
      width="25px"
      height="50px"
      viewBox="0 0 75 180"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Oval - Solid</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M-15,53 L90,53 C110.434536,53 127,69.5654643 127,90 C127,110.434536 110.434536,127 90,127 L-15,127 C-35.4345357,127 -52,110.434536 -52,90 C-52,69.5654643 -35.4345357,53 -15,53 Z"
          id="Oval---Solid"
          fill={color}
          fillRule="nonzero"
          transform="translate(37.500000, 90.000000) rotate(90.000000) translate(-37.500000, -90.000000) "
        />
      </g>
    </svg>
  );

  return (
    <>
      {Array(quantity)
        .fill(0)
        .map((_, i) => figure(i))}
    </>
  );
}
