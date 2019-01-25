import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { FruitsAndVegetables } from '../apollo/queries';
import Loading from '../components/Loading';

const PageFruitsAndVegetables = () => {
  const { data, loading } = useQuery(FruitsAndVegetables, { suspend: false });
  if (loading) return <Loading />;
  const { result } = data;
  return <div>{JSON.stringify(result, null, 2)}</div>;
};

export default PageFruitsAndVegetables;
