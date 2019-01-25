import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';

const ModalOverlay = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  background: '#000A',
  zIndex: 10
});

const ModalContainer = styled.div({
  position: 'fixed',
  background: 'white',
  width: '80%',
  height: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  zIndex: 11,
  overflow: 'hidden',
  borderRadius: '20px'
});

const Modal = ({ children, onOverlayClick }) => (
  <>
    <ModalOverlay onClick={onOverlayClick} />
    <ModalContainer>{children}</ModalContainer>
  </>
);
export default posed(Modal)({
  visible: { scale: 1 },
  hidden: { scale: 0 }
});
