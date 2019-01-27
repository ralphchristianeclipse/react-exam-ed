import styled from '@emotion/styled';
import posed from 'react-pose';

export const Modal = posed(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  width: 90%;
  height: fit-content;
  z-index: 999;
  max-height: 90%;
`)({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});
