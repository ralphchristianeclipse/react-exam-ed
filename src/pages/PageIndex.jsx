/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { useTimeout } from 'react-use';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
const Container = posed(styled.div`
  place-content: center;
  display: flex;
`)({
  enter: {
    scale: 1
  },
  exit: {
    scale: 0
  }
});

const TopCurvedButton = styled(NavLink)`
  text-decoration: none;
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 2px solid #000;
  padding: 1rem;
  font-size: 4rem;
  cursor: pointer;
  text-align: center;
  display: block;
  margin-bottom: 1rem;
  color: initial;
  user-select: none;
`;

const BottomCurvedButton = styled(NavLink)`
  text-decoration: none;
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 2px solid #000;
  padding: 1rem;
  font-size: 4rem;
  cursor: pointer;
  display: block;
  text-align: center;
  color: initial;
  user-select: none;
`;

const PageIndex = props => {
  const show = useTimeout(2000);
  return (
    <PoseGroup>
      {show && [
        <Container key="test" style={{ height: 'calc(100vh - 70px)' }}>
          <div style={{ margin: 'auto' }}>
            <TopCurvedButton to="/animals">🐕🐈</TopCurvedButton>
            <BottomCurvedButton to="/fruits-and-vegetables">
              🍅🍆
            </BottomCurvedButton>
          </div>
        </Container>
      ]}
    </PoseGroup>
  );
};

export default PageIndex;
