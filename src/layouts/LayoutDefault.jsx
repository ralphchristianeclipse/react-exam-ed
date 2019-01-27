import React from 'react';
import { routes } from '../routes';

const validRoutes = routes
  .map(route => route.path)
  .filter(route => route !== '/');
console.log(validRoutes);
export const LayoutDefault = ({ header, footer, children, location }) => {
  const isValidRoute = validRoutes.includes(location.pathname);
  const style = {
    paddingTop: isValidRoute ? '3.6rem' : '0px'
  };
  return (
    <div>
      {isValidRoute && header}
      <main style={style}>{children}</main>
      {footer}
    </div>
  );
};
