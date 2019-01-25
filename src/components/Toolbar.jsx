import React from 'react';
import styled from '@emotion/styled';

const ToolbarContainer = styled.div`
  display: flex;
  place-content: center;
  background-image: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  padding: 1rem 0.5rem;
  height: 3.5rem;
  width: 100%;
  position: fixed;
  z-index: 10;
`;

const Toolbar = props => {
  const { children } = props;
  return <ToolbarContainer>{children}</ToolbarContainer>;
};

export default Toolbar;
