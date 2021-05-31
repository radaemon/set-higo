import React from 'react';

type Props = {
  color: string;
  children: string;
};

export default function InformativeContainer({ color, children }: Props) {
  return (
    <div className={`informative-container-${color}`}>
      <p>{children}</p>
    </div>
  );
}
