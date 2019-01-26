import React from 'react';
import { useHover } from 'react-use';
import ModalImage from './ModalImage';

const HoverableModalImage = ({ onHover, ...remainingProps }) => {
  const element = <ModalImage />;
  const [hoverable, hovered] = useHover(element);
  if (typeof onHover === 'function') onHover(hovered);
  return (
    <hoverable.type
      {...hoverable.props}
      {...remainingProps}
      pose={hovered ? 'hovered' : 'unhovered'}
    />
  );
};

export default HoverableModalImage;
