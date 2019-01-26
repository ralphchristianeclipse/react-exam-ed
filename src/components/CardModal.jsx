import React from 'react';
import { PoseGroup } from 'react-pose';
import Shade from './Shade';
import Modal from './Modal';
import HoverableModalImage from './HoverableModalImage';
import styled from '@emotion/styled';

const CardModalContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;
const CardModalParagraph = styled.div`
  padding: 0.5rem;
  text-align: justify;
`;
const CardModal = ({ item, onClickOverlay }) => {
  return (
    <PoseGroup>
      {item && [
        <Shade
          key={`shade-${item.id}`}
          className="shade"
          onClick={onClickOverlay}
        />,
        <Modal key={`modal-${item.id}`} className="modal">
          <HoverableModalImage src={item.image.full} alt={item.Title} />
          <CardModalContainer>
            <h1>{item.Title}</h1>
            <h4>
              {item.Family} | {item.CollectiveNoun || item.Genus}
            </h4>
            <CardModalParagraph>{item.Description}</CardModalParagraph>
          </CardModalContainer>
        </Modal>
      ]}
    </PoseGroup>
  );
};

export default CardModal;
