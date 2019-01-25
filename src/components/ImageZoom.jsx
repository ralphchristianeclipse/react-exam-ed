import React, { useRef } from 'react';
import posed from 'react-pose';
import styled from '@emotion/styled';
import { useOutsideClick, useHover } from 'react-use';
const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const PosedImageZoom = posed(styled.img`
  cursor: zoom-in;
  transform-origin: 50% 50%;
`)({
  zoomedIn: {
    position: 'absolute',
    margin: 'auto',
    width: '70%',
    flip: true,
    zIndex: 999,
    transition
  },
  zoomedInHovered: {
    position: 'absolute',
    margin: 'auto',
    width: '70%',
    flip: true,
    zIndex: 999,
    transition,
    filter: 'blur(5px)'
  },
  zoomedOut: {
    position: 'static',
    width: 'auto',
    height: 'auto',
    flip: true,
    transition
  }
});

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: #000a;
`;
const ImageZoom = props => {
  const {
    zoomed,
    src,
    zoomedSrc,
    onClick,
    children,
    ...remainingProps
  } = props;
  const ref = useRef(null);
  const element = (
    <PosedImageZoom
      ref={ref}
      pose={zoomed ? (hovered ? 'zoomedInHovered' : 'zoomedIn') : 'zoomedOut'}
      {...remainingProps}
      src={!zoomed ? src : zoomedSrc}
      onClick={onClick}
    />
  );
  const [hoverable, hovered] = useHover(element);
  useOutsideClick(ref, () => {
    if (!zoomed) return;
    onClick();
  });
  const zoomedAndHovered = zoomed && hovered;
  return (
    <>
      {zoomed && <Overlay />}
      {hoverable}
      {zoomed && <div style={{ position: 'absolute' }}>{children}</div>}
    </>
  );
};

export default ImageZoom;
