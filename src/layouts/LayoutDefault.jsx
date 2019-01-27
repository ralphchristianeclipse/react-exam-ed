import React from 'react';

export const LayoutDefault = ({ header, footer, children, location }) => (
  <div>
    {header}
    <main style={{ paddingTop: location.pathname !== '/' ? '3.6rem' : '0px' }}>
      {children}
    </main>
    {footer}
  </div>
);
