import React from 'react';

import { Animals } from '../apollo/queries';

import CardListQueryData from '../components/CardListQueryData';

const PageAnimals = () => {
  return <CardListQueryData query={Animals} extraField="Collective Noun" />;
};

export default PageAnimals;
