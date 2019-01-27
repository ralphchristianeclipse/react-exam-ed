import React from 'react';
import { useState } from 'react';
import posed from 'react-pose';
import styled from '@emotion/styled';

export const LazyLoadedImage = posed(styled.img`
  cursor: zoom-in;
`)({
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
