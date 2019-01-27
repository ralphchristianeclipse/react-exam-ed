/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { useTimeout } from 'react-use';

const MarginAuto = styled.div`
  margin: auto;
`;
const ErrorContainer = posed(styled.div`
  display: flex;
  place-content: center;
  height: calc(100vh - 3.6rem);
  text-align: center;
`)({
  enter: {
    scale: 1
  },
  exit: {
    scale: 0
  }
});
export const Error = ({ children }) => {
  const ready = useTimeout(500);
  const defaultChildren = (
    <>
      <div>Something happened unexpectedly 😔</div>
      <div>🔍 We will check on it shortly 🔎</div>{' '}
    </>
  );
  return (
    <ErrorContainer initialPose="exit" pose={ready ? 'enter' : 'exit'}>
      <MarginAuto>
        <h2>{children || defaultChildren}</h2>
      </MarginAuto>
    </ErrorContainer>
  );
};
