import React from 'react';
import { Paragraph } from './Paragraph';
import { CardTitle } from './CardTitle';
import { FlexContainer } from './FlexContainer';
import { AnimatedCard } from './AnimatedCard';
import { LazyLoadImage } from './LazyLoadedImage';

export const CardItem = ({ item, setItem, ...props }) => {
  return (
    <AnimatedCard
      {...props}
      key={item.id}
      style={{ margin: '10px', cursor: 'pointer' }}
    >
      <FlexContainer alignContent="center">
        <LazyLoadImage
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
};
