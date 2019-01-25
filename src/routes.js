import PageIndex from './pages/PageIndex';
import PageList from './pages/PageList';
export const routes = [
  {
    path: '/',
    exact: true,
    component: PageIndex
  },
  {
    path: '/:type',
    component: PageList
  }
];
