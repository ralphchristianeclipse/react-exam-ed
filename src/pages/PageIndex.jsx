/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { useTimeout } from 'react-use';
import styled from '@emotion/styled';
import { Loading } from '../components/Loading';
import { EmoticonLink } from '../components/EmoticonLink';

export const Container = posed(styled.div`
  place-content: center;
  display: flex;
  user-select: none;
`)({
  enter: {
    scale: 1,
    delayChildren: 200,
    staggerChildren: 100
  },
  exit: {
    scale: 0
  }
});

export const PageIndex = props => {
  const show = useTimeout(4000);
  if (!show) return <Loading />;
  return (
    <PoseGroup animateOnMount>
      {show && [
        <Container
          key="test"
          style={{
            height: '100vh',
            background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'
          }}
        >
          <div style={{ margin: 'auto', color: '#FFF', textAlign: 'center' }}>
            <h2>Animals</h2>
            <EmoticonLink to="/animals" top alternate="😻">
              😺
            </EmoticonLink>
            <EmoticonLink to="/fruits-and-vegetables" alternate="🍎">
              🍅
            </EmoticonLink>
            <h2>Fruits & Veggies</h2>
          </div>
        </Container>
      ]}
    </PoseGroup>
  );
};
