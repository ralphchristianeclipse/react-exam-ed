import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { useTimeout } from 'react-use';
import styled from '@emotion/styled';
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

const TopCurvedButton = styled.div`
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 2px solid #000;
  padding: 1rem;
  font-size: 4rem;
  cursor: pointer;
  text-align: center;
  margin-bottom: 1rem;
`;

const BottomCurvedButton = styled.div`
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 2px solid #000;
  padding: 1rem;
  font-size: 4rem;
  cursor: pointer;
  text-align: center;
`;

const PageIndex = () => {
  const show = useTimeout(2000);
  return (
    <PoseGroup>
      {show && [
        <Container key="test" style={{ height: 'calc(100vh - 70px)' }}>
          <div style={{ margin: 'auto' }}>
            <TopCurvedButton>🐈🐕</TopCurvedButton>
            <BottomCurvedButton>🍆🍅</BottomCurvedButton>
          </div>
        </Container>
      ]}
    </PoseGroup>
  );
};

export default PageIndex;
