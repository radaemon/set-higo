import React, { ReactNode } from 'react';
import cx from 'classnames';

import './styles.scss';

type Props = {
  className: string;
  children: ReactNode;
};

const Page = ({ className, children }: Props) => (
  <div className="container">
    <div className={cx('Page', className)}>{children}</div>
  </div>
);

export default Page;
