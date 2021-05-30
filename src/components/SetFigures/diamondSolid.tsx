import React from 'react';

export const diamondSolid = (color: string, quantity: number) => {
  const figure = (
    <svg
      width="75px"
      height="180px"
      viewBox="0 0 75 180"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Diamond - Solid</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M-50.746457,88.1445211 L36.253543,53.1445211 C36.7299989,52.9528434 37.2619313,52.9517953 37.7391388,53.1415938 L125.739139,88.1415938 C127.420287,88.8102322 127.420287,91.1897678 125.739139,91.8584062 L37.7391388,126.858406 C37.2619313,127.048205 36.7299989,127.047157 36.253543,126.855479 L-50.746457,91.8554789 C-52.4178477,91.1830804 -52.4178477,88.8169196 -50.746457,88.1445211 Z"
          id="Diamond---Solid"
          fill={color}
          fillRule="nonzero"
          transform="translate(37.500000, 90.000000) rotate(90.000000) translate(-37.500000, -90.000000) "
        />
      </g>
    </svg>
  );
  return <div className="card-container">{Array(quantity).map(() => figure)}</div>;
};
