import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { useTimeout } from 'react-use';
import { useToggleValue } from '../hooks';

import { CardModal } from './CardModal';
import { Loading } from './Loading';
import { CardContainer } from './CardContainer';
import { CardItem } from './CardItem';
import { Error } from './Error';

export const CardItems = ({ items, setCurrentItem }) =>
  items.map(item => (
    <CardItem item={item} setItem={setCurrentItem} key={item.id} />
  ));

export const CardListQueryData = ({ query, extraField, options = {} }) => {
  const { data, loading, error } = useQuery(query, {
    suspend: false,
    ...options
  });
  const [currentItem, setCurrentItem] = useToggleValue();
  const onSetCurrentItem = item => {
    document.body.style.overflow = 'hidden';
    setCurrentItem(item);
  };
  const onClickOverlay = () => {
    document.body.style.overflow = 'auto';
    setCurrentItem();
  };
  const ready = useTimeout(100);
  if (loading) return <Loading />;
  if (error) return <Error />;
  const { result } = data;
  return (
    <div>
      <CardModal
        item={currentItem}
        onClickOverlay={onClickOverlay}
        extraField={extraField}
      />
      <CardContainer pose={ready ? 'visible' : 'hidden'}>
        <CardItems items={result} setCurrentItem={onSetCurrentItem} />
      </CardContainer>
    </div>
  );
};
