import React from 'react';

type Props = {
  color: string;
  quantity: number;
};

export default function DiamondOutlined({ color, quantity }: Props) {
  const figure = (idx: number) => (
    <svg
      key={idx}
      width="23px"
      height="50px"
      viewBox="0 0 75 180"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Diamond - Outlined</title>
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
          d="M-44.6413526,90.25 L37.0042446,123.09593 L119.588297,90.25 L37.0042446,57.4040701 L-44.6413526,90.25 Z M-50.746457,88.3945211 L36.253543,53.3945211 C36.7299989,53.2028434 37.2619313,53.2017953 37.7391388,53.3915938 L125.739139,88.3915938 C127.420287,89.0602322 127.420287,91.4397678 125.739139,92.1084062 L37.7391388,127.108406 C37.2619313,127.298205 36.7299989,127.297157 36.253543,127.105479 L-50.746457,92.1054789 C-52.4178477,91.4330804 -52.4178477,89.0669196 -50.746457,88.3945211 Z"
          id="Diamond---Outlined"
          fill={color}
          fillRule="nonzero"
          transform="translate(37.500000, 90.250000) rotate(90.000000) translate(-37.500000, -90.250000) "
        />
      </g>
    </svg>
  );
  return (
    <div key={color + quantity}>
      {Array(quantity)
        .fill(0)
        .map((_, i) => figure(i))}
    </div>
  );
}
