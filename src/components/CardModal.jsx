import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from '@emotion/styled';

import { Shade } from './Shade';
import { Modal } from './Modal';
import { useWindowSize, useHover, useSpeech } from 'react-use';
import { ModalImage } from './ModalImage';

export const CardModalContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;
export const CardModalParagraph = styled.div`
  padding: 0.5rem;
  text-align: justify;
`;

const transition = {
  type: 'spring',
  delay: 600,
  stiffness: 100,
  damping: 10
};
const PosedCardModalContainer = posed(styled(CardModalContainer)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 50%;
  height: 50%;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  opacity: 0.8;
  border-radius: inherit;
  color: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
`)({
  unhovered: {
    scale: 0,
    transition
  },
  hovered: {
    scale: 1,
    transition
  }
});
const Container = ({ children, largeScreen, ...props }) =>
  largeScreen ? (
    <PosedCardModalContainer {...props}>
      <div style={{ margin: 'auto' }}>{children}</div>
    </PosedCardModalContainer>
  ) : (
    <CardModalContainer {...props}>{children}</CardModalContainer>
  );
export const CardModal = ({ item, onClickOverlay, extraField }) => {
  const element = <ModalImage />;
  const { width } = useWindowSize();
  const [hoverable, hovered] = useHover(element);
  const largeScreen = width > 768;
  const isHoveredOnLargeScreens = largeScreen && hovered;
  const pose = isHoveredOnLargeScreens ? 'hovered' : 'unhovered';
  return (
    <PoseGroup>
      {item && [
        <Shade
          key={`shade-${item.id}`}
          className="shade"
          onClick={onClickOverlay}
        />,
        <Modal key={`modal-${item.id}`} className="modal">
          <hoverable.type
            pose={pose}
            src={item.image.full}
            alt={item.image.Title}
            {...hoverable.props}
          />
          <Container
            initialPose="unhovered"
            pose={pose}
            largeScreen={largeScreen}
          >
            <h1>{item.Title}</h1>
            <h4>
              {item.Family} | {item[extraField]}
            </h4>
            <CardModalParagraph>{item.Description}</CardModalParagraph>
          </Container>
        </Modal>
      ]}
    </PoseGroup>
  );
};
