import React from 'react';
import { useHover, useWindowSize } from 'react-use';
import { ModalImage } from './ModalImage';

export const HoverableModalImage = ({ onHover, ...props }) => {
  const element = <ModalImage />;
  const { width } = useWindowSize();
  const [hoverable, hovered] = useHover(element);
  const pose = width > 768 && hovered ? 'hovered' : 'unhovered';
  if (typeof onHover === 'function') onHover(hovered);
  return <hoverable.type {...hoverable.props} {...props} pose={pose} />;
};
