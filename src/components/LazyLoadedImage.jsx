import React from 'react';
import { useState } from 'react';
import posed from 'react-pose';
import styled from '@emotion/styled';

export const LazyLoadedImage = posed(styled.img`
  cursor: zoom-in;
  border-right-style: solid;
  border-right-color: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
`)({
  hoverable: true,
  init: {
    marginRight: '0rem',
    scale: 1,
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    borderRightWidth: '0px'
  },
  hover: {
    marginRight: '1rem',
    scale: 1.1,
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    borderRightWidth: '5px'
  },
  loading: {
    filter: 'blur(5px)'
  },
  loaded: {
    filter: 'blur(0px)'
  }
});
export const LazyLoadImage = props => {
  const [loading, setLoading] = useState(true);
  const pose = loading ? 'loading' : 'loaded';
  const onLoad = () => {
    setLoading(false);
  };

  return <LazyLoadedImage {...props} pose={pose} onLoad={onLoad} />;
};
