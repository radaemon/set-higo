import React from 'react';

type Props = {
  color: string;
  quantity: number;
};

export default function OvalOutlined({ color, quantity }: Props) {
  const figure = (idx: number) => (
    <svg
      key={idx}
      width="25px"
      height="50px"
      viewBox="0 0 75 179"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Oval - Outlined</title>
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
          d="M-15,56.5 C-33.2253967,56.5 -48,71.2746033 -48,89.5 C-48,107.725397 -33.2253967,122.5 -15,122.5 L90,122.5 C108.225397,122.5 123,107.725397 123,89.5 C123,71.2746033 108.225397,56.5 90,56.5 L-15,56.5 Z M-15,52.5 L90,52.5 C110.434536,52.5 127,69.0654643 127,89.5 C127,109.934536 110.434536,126.5 90,126.5 L-15,126.5 C-35.4345357,126.5 -52,109.934536 -52,89.5 C-52,69.0654643 -35.4345357,52.5 -15,52.5 Z"
          id="Oval---Outlined"
          fill={color}
          fillRule="nonzero"
          transform="translate(37.500000, 89.500000) rotate(90.000000) translate(-37.500000, -89.500000) "
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
