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

export const Items = gql`
  fragment Item on Item {
    id
    title
    description
    family
    image {
      id
      thumb
      full
    }
  }
  query Items($type: String!) {
    result: items(type: $type) {
      ...Item
      ... on Animal {
        collectiveNoun
      }
      ... on FruitAndVegetable {
        genus
      }
    }
  }
`;
