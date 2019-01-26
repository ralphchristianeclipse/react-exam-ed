/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from '@emotion/styled';
const Centered = styled.div`
  display: flex;
  height: calc(100vh - 70px);
  width: 100%;
  text-align: center;

  * {
    margin: auto;
  }
`;
const Loading = () => (
  <Centered>
    <h1>Loading 🍆🍅🐈🐕</h1>
  </Centered>
);

export default Loading;
