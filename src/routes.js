import PageIndex from './pages/PageIndex';
import PageAnimals from './pages/PageAnimals';
import PageFruitsAndVegetables from './pages/PageFruitsAndVegetables';

export const routes = [
  {
    path: '/',
    exact: true,
    component: PageIndex
  },
  {
    path: '/animals',
    component: PageAnimals
  },
  {
    path: '/fruits-and-vegetables',
    component: PageFruitsAndVegetables
  }
];
