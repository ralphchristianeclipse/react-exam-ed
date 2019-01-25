import { getAnimals, getFruitsAndVegetables } from '../api';

const mapToType = (list, type) =>
  list.map(item => ({
    ...item,
    id: item.Id,
    __typename: type
  }));

const mapToImageType = type => ({ ImageURLs, id }) => ({
  id,
  thumb: ImageURLs.Thumb,
  full: ImageURLs.FullSize,
  __typename: `Image${type}`
});

export default {
  FruitAndVegetable: {
    image: mapToImageType('FruitAndVegetable')
  },
  Animal: {
    image: mapToImageType('Animal')
  },
  Query: {
    animals: async () => {
      const animals = await getAnimals();
      return mapToType(animals, 'Animal');
    },
    fruitsAndVegetables: async () => {
      const fruitAndVegetables = await getFruitsAndVegetables();
      return mapToType(fruitAndVegetables, 'FruitAndVegetable');
    }
  }
};
