import React from 'react';

const LayoutDefault = props => {
  const { header, footer, children } = props;
  return (
    <div>
      {header}
      <main style={{ paddingTop: '3.6rem' }}>{children}</main>
      {footer}
    </div>
  );
};

export default LayoutDefault;
