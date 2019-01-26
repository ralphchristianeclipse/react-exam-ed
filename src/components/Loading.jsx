/* eslint-disable jsx-a11y/accessible-emoji */
import React, { memo } from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { useToggleTimeout } from '../hooks';

const Centered = styled.div`
  display: flex;
  height: calc(100vh - 100px);
  width: 100%;
  text-align: center;
  place-content: center;
  font-size: 4rem;
`;

const AnimatedTextScale = posed(styled.div`
  display: inline-block;
  transform-origin: center;
  height: fit-content;
  user-select: none;
`)({
  enter: {
    scale: 1,
    y: 0,
    transition: ({ index }) => ({
      delay: index * 100
    })
  },
  exit: {
    scale: 0.5,
    y: 20,
    transition: ({ index }) => ({
      delay: index * 100
    })
  }
});
const emoticons = Array.from('🍅🍆🐈🐕');

const AnimatedEmoticons = memo(({ on }) => {
  const emoticonElements = emoticons.map((char, index) => (
    <AnimatedTextScale
      key={index}
      pose={on ? 'enter' : 'exit'}
      index={index + 1}
    >
      {char}
    </AnimatedTextScale>
  ));
  return <div style={{ margin: 'auto' }}>{emoticonElements}</div>;
});

const Loading = memo(() => {
  const on = useToggleTimeout(emoticons.length * 400);

  document.body.style.overflowY = on ? 'hidden' : 'auto';

  return (
    <Centered>
      <AnimatedEmoticons on={on} />
    </Centered>
  );
});

export default Loading;
