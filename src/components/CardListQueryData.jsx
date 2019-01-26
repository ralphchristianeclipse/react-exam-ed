import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { useTimeout } from 'react-use';
import { useToggleValue } from '../hooks';

import CardModal from './CardModal';
import Loading from './Loading';
import CardContainer from './CardContainer';
import CardItem from './CardItem';

const CardListQueryData = ({ query, extraField }) => {
  const { data, loading } = useQuery(query, { suspend: false });
  const [currentItem, setCurrentItem] = useToggleValue();
  const ready = useTimeout(100);
  return <Loading />;
  const { result } = data;
  const cards = result.map(item => (
    <CardItem item={item} setItem={setCurrentItem} key={item.id} />
  ));
  return (
    <div>
      <CardModal
        item={currentItem}
        onClickOverlay={() => setCurrentItem()}
        extraField={extraField}
      />
      <CardContainer pose={ready ? 'visible' : 'hidden'}>{cards}</CardContainer>
    </div>
  );
};

export default CardListQueryData;
