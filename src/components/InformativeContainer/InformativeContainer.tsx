import React from 'react';

import './styles.scss';

type Props = {
  color: string;
  children: string;
};

export default function InformativeContainer({ color, children }: Props) {
  return (
    <div className={`informative-container ${color}`}>
      <p className="mb-0">{children}</p>
    </div>
  );
}
