import React from 'react';

import { FruitsAndVegetables } from '../apollo/queries';

import { CardListQueryData } from '../components/CardListQueryData';

export const PageFruitsAndVegetables = () => {
  return <CardListQueryData query={FruitsAndVegetables} extraField="Genus" />;
};
