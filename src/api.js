import { request } from './axios';

export const getAnimals = () =>
  request({
    url: '/animals'
  });

export const getFruitsAndVegetables = () =>
  request({
    url: '/fruitveg'
  });
