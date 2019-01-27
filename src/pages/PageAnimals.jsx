import React from 'react';

import { Items } from '../apollo/queries';

import { CardListQueryData } from '../components/CardListQueryData';

const options = { variables: { type: 'Animal' } };
export const PageAnimals = () => (
  <CardListQueryData
    query={Items}
    options={options}
    extraField="collectiveNoun"
  />
);
