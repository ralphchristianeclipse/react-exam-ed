import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import styled from '@emotion/styled';
import Modal from '../components/Modal';
import Toolbar from '../components/Toolbar';

const queries = {
  animals: gql`
    query Animals {
      result: animals @client {
        id
        Title
        image {
          id
          thumb
          full
        }
        Description
        Height
        Width
        Family

        CollectiveNoun
        __typename
      }
    }
  `,
  fruitveg: gql`
    query FruitAndVegetables {
      result: fruitsAndVegetables @client {
        id
        Title
        image {
          id
          thumb
          full
        }
        Description
        Height
        Width
        Family

        Genus
        __typename
      }
    }
  `
};

const Image = styled.img({
  borderRadius: '50%',
  position: 'absolute',
  top: '10px',
  border: '1px solid #000',
  height: '80px',
  width: '80px'
});
const PageItemContainer = styled.div({
  position: 'relative',
  display: 'flex',
  margin: '20px',
  overflow: 'hidden',
  height: '120px',
  cursor: 'pointer'
});

const EllipsisParagraph = styled.p({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '50%',
  maxWidth: '1000px'
});

const PageItem = props => {
  const { item, type, ...remainingProps } = props;
  return (
    <PageItemContainer {...remainingProps}>
      <div style={{ paddingRight: '100px' }}>
        <Image src={item.image.thumb} alt={type} />
      </div>
      <div>
        <h1>{item.Title}</h1>
        <EllipsisParagraph>{item.Description}</EllipsisParagraph>
      </div>
    </PageItemContainer>
  );
};

const PageList = props => {
  const { match } = props;
  const { params } = match;
  const { type } = params;
  const { data, loading } = useQuery(queries[type], { suspend: false });
  const [currentItem, setCurrentItem] = useState(null);
  if (loading) return <h1> Loading... </h1>;
  const { result } = data;

  const items = result.map(item => (
    <PageItem
      item={item}
      type={type}
      key={item.id}
      onClick={() => setCurrentItem(item)}
    />
  ));
  return (
    <div>
      <Modal
        pose={currentItem ? 'visible' : 'hidden'}
        onOverlayClick={() => setCurrentItem(null)}
      >
        {currentItem && (
          <div>
            <Toolbar>
              <h1 style={{ color: '#FFF', paddingLeft: '10px' }}>
                {currentItem.Title}
              </h1>
            </Toolbar>
            <img src={currentItem.image.full} alt={currentItem.Title} />
            <p style={{ padding: '20px 10px' }}>{currentItem.Description}</p>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <p>
                <b>Family: </b>
                <span>{currentItem.Family}</span>
              </p>
              <div>{currentItem.Genus || currentItem.CollectiveNoun}</div>
            </div>
          </div>
        )}
      </Modal>

      {items}
    </div>
  );
};

export default PageList;
