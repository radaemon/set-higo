import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import './styles.scss';

interface Props {
  className: string;
  children: ReactNode;
}

const Page: FC<Props> = (props: Props) => (
  <div className="container">
    <div className={cx('Page', props.className)}>{props.children}</div>
  </div>
);

export default Page;
