import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { useTimeout } from 'react-use';
import { useToggleValue } from '../hooks';

import { CardModal } from './CardModal';
import { Loading } from './Loading';
import { CardContainer } from './CardContainer';
import { CardItem } from './CardItem';

export const CardItems = ({ items, setCurrentItem }) =>
  items.map(item => (
    <CardItem item={item} setItem={setCurrentItem} key={item.id} />
  ));

export const CardListQueryData = ({ query, extraField }) => {
  const { data, loading } = useQuery(query, { suspend: false });
  const [currentItem, setCurrentItem] = useToggleValue();
  const ready = useTimeout(100);
  if (loading) return <Loading />;
  const { result } = data;
  return (
    <div>
      <CardModal
        item={currentItem}
        onClickOverlay={() => setCurrentItem()}
        extraField={extraField}
      />
      <CardContainer pose={ready ? 'visible' : 'hidden'}>
        <CardItems items={result} setCurrentItem={setCurrentItem} />
      </CardContainer>
    </div>
  );
};
