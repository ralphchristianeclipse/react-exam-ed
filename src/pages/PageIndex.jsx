/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { useTimeout, useHover } from 'react-use';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Loading } from '../components/Loading';

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

export const CircleEmoticon = styled.div`
  text-decoration: none;
  border-radius: 50%;
  border: 0px solid #fff;
  padding: 2rem;
  font-size: 5rem;
  text-align: center;
  margin: 2rem;
  cursor: pointer;
  user-select: inherit;
  background: linear-gradient(
    to left,
    rgb(15, 32, 39),
    rgb(32, 58, 67),
    rgb(44, 83, 100)
  );
`;

export const AnimatedCircleEmoticon = posed(CircleEmoticon)({
  hoverable: true,
  init: {
    scale: 1,
    borderWidth: '0.2rem',
    borderColor: '#fff'
  },
  hover: {
    scale: 1.2,
    borderWidth: '0.4rem',
    borderColor: 'rgb(44, 83, 100)'
  },
  enter: {
    y: '0',
    borderWidth: '0.2rem',
    rotateZ: '4turn',
    transition: {
      rotateZ: {
        duration: 1000
      }
    }
  },
  exit: {
    y: ({ top }) => (top ? '-150%' : '150%'),
    borderWidth: '0rem',
    rotateZ: '1turn'
  }
});

const NavLinkNoUnderline = styled(NavLink)`
  text-decoration: none;
`;

const PosedScale = posed.div({
  enter: {
    scale: 1
  },
  exit: {
    scale: 0
  }
});
export const EmoticonLink = ({ children, alternate, to, ...props }) => {
  const element = hovered => (
    <AnimatedCircleEmoticon {...props}>
      <NavLinkNoUnderline to={to}>
        <PoseGroup>
          <PosedScale key={hovered ? 'alternate' : 'default'}>
            {hovered ? alternate : children}
          </PosedScale>
        </PoseGroup>
      </NavLinkNoUnderline>
    </AnimatedCircleEmoticon>
  );
  const [hoverable] = useHover(element);

  return hoverable;
};

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
            <EmoticonLink
              to="/animals"
              top
              onPoseComplete={console.log}
              alternate="😻"
            >
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
