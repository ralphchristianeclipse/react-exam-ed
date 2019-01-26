import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Animals } from '../apollo/queries';
import Loading from '../components/Loading';
import styled from '@emotion/styled';
import Card from '../components/Card';
import Paragraph from '../components/Paragraph';
import { useToggleValue } from '../hooks';
import posed, { PoseGroup } from 'react-pose';
import { mobileScreens } from '../screens';
import { useTimeout, useHover } from 'react-use';
const Flex = styled.div`
  display: flex;
  flex-direction ${props => props.direction || 'row'};
  flex-wrap ${props => props.wrap || 'nowrap'};
  justify-content: ${props => props.justifyContent || 'initial'};
  align-content: ${props => props.alignContent || 'initial'};
`;

const CardTitle = styled.h1`
  font-size: 1.1rem;
`;

const Modal = posed.div({
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

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const ModalImage = posed(styled.img`
  width: 100%;
  position: relative;
  height: 100%;
  object-fit: cover;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  ${mobileScreens.sm} {
    height: auto;
  }
`)({
  unhovered: {
    filter: 'none',
    opacity: 1
  },
  hovered: {
    filter: 'blur(5px)',
    opacity: 0.5
  }
});

const AnimalContainer = posed.div({
  visible: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  hidden: {
    delay: 300
  }
});

const AnimatedCard = posed(Card)({
  visible: { y: 0, opacity: 1 },
  hidden: { y: 20, opacity: 0 }
});

const AnimalCard = ({ item, setAnimal, ...remaingProps }) => (
  <AnimatedCard
    {...remaingProps}
    key={item.id}
    style={{ margin: '10px', cursor: 'pointer' }}
  >
    <Flex alignContent="center">
      <img
        style={{ cursor: 'zoom-in' }}
        src={item.image.thumb}
        alt={item.Title}
        onClick={() => setAnimal(item)}
      />
      <div
        style={{
          padding: '.6rem',
          width: '95%',
          overflow: 'hidden'
        }}
      >
        <CardTitle>{item.Title}</CardTitle>
        <Paragraph>{item.Description}</Paragraph>
      </div>
    </Flex>
  </AnimatedCard>
);

const HoverableModalImage = props => {
  const element = hovered => (
    <ModalImage {...props} pose={hovered ? 'hovered' : 'unhovered'} />
  );
  const [hoverable] = useHover(element);
  return hoverable;
};

const PageAnimals = () => {
  const { data, loading } = useQuery(Animals, { suspend: false });
  const [animal, setAnimal] = useToggleValue();
  const ready = useTimeout(100);
  if (loading) return <Loading />;
  const { result } = data;
  const animalCards = result.map(item => (
    <AnimalCard item={item} setAnimal={setAnimal} key={item.id} />
  ));
  return (
    <div>
      <PoseGroup>
        {animal && [
          <Shade
            key={`shade-${animal.id}`}
            className="shade"
            onClick={() => setAnimal()}
          />,
          <Modal key={`modal-${animal.id}`} className="modal">
            <HoverableModalImage src={animal.image.full} alt={animal.Title} />
          </Modal>
        ]}
      </PoseGroup>
      <AnimalContainer pose={ready ? 'visible' : 'hidden'}>
        {animalCards}
      </AnimalContainer>
    </div>
  );
};

export default PageAnimals;
