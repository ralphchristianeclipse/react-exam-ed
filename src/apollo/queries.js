import gql from 'graphql-tag';

export const Animals = gql`
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
`;

export const FruitsAndVegetables = gql`
  query FruitsAndVegetables {
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
`;
