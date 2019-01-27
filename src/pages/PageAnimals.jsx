import React from 'react';

import { Animals } from '../apollo/queries';

import { CardListQueryData } from '../components/CardListQueryData';

export const PageAnimals = () => {
  return <CardListQueryData query={Animals} extraField="CollectiveNoun" />;
};
