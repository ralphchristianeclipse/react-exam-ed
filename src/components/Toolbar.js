import React from 'react';
import styled from '@emotion/styled';

const ToolbarContainer = styled.div({
  display: 'flex',
  background: '#222',
  padding: '10px 5px',
  height: '64px',
  width: '100%',
  position: 'fixed',
  zIndex: 10
});

const Toolbar = props => {
  const { children } = props;
  return <ToolbarContainer>{children}</ToolbarContainer>;
};

export default Toolbar;
