import React from 'react';
import styled from '@emotion/styled';
import posed, { PoseGroup } from 'react-pose';

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000a;
`;

const ModalContainer = styled.div`
  position: absolute;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%;-50%);
  overflow: hidden;
  border-radius: 10px;
`;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 999;
`;

const Modal = ({ children, onOverlayClick }) => (
  <ModalWrapper>
    <ModalOverlay onClick={onOverlayClick} />
    <ModalContainer>{children}</ModalContainer>
  </ModalWrapper>
);

const AnimatedModal = posed(Modal)({
  enter: { scale: 1 },
  exit: { scale: 0 }
});

export default () => (
  <PoseGroup>
    <AnimatedModal key="modal" />
  </PoseGroup>
);
