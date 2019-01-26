import React from 'react';
import Paragraph from './Paragraph';
import CardTitle from './CardTitle';
import FlexContainer from './FlexContainer';
import AnimatedCard from './AnimatedCard';
export const CardItem = ({ item, setItem, ...remaingProps }) => (
  <AnimatedCard
    {...remaingProps}
    key={item.id}
    style={{ margin: '10px', cursor: 'pointer' }}
  >
    <FlexContainer alignContent="center">
      <img
        style={{ cursor: 'zoom-in' }}
        src={item.image.thumb}
        alt={item.Title}
        onClick={() => setItem(item)}
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
    </FlexContainer>
  </AnimatedCard>
);

export default CardItem;
