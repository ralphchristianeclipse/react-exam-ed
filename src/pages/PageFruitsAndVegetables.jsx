import React from 'react';

import { Items } from '../apollo/queries';

import { CardListQueryData } from '../components/CardListQueryData';

const options = { variables: { type: 'FruitAndVegetable' } };
export const PageFruitsAndVegetables = () => (
  <CardListQueryData query={Items} options={options} extraField="genus" />
);
