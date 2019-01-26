import React from 'react';
import { Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import './App.sass';
import { routes } from './routes';

import LayoutDefault from './layouts/LayoutDefault';

import Toolbar from './components/Toolbar';
import ToolbarLink from './components/ToolbarLink';

/* Map All routes to a Route Component and spread the route props using spread operator */

const getRouterViews = routes =>
  routes.map(route => <Route {...route} key={route.path} />);

const RouteNotFound = () => <h1> 404 Not Found </h1>;

const links = [
  {
    path: '/animals',
    name: '🐈 Animals 🐕'
  },
  {
    path: '/fruits-and-vegetables',
    name: '🍅Fruits & Vegetables🍆'
  }
];

const routerViews = getRouterViews(routes);
const routerLinks = links.map(link => (
  <ToolbarLink to={link.path} key={link.path}>
    {link.name}
  </ToolbarLink>
));

const RoutesContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const App = ({ location }) => (
  <LayoutDefault
    header={location.pathname !== '/' && <Toolbar>{routerLinks}</Toolbar>}
  >
    <PoseGroup>
      <RoutesContainer key={location.key || location.pathname}>
        <Switch>
          {routerViews}
          <Route component={RouteNotFound} />
        </Switch>
      </RoutesContainer>
    </PoseGroup>
  </LayoutDefault>
);

export default App;
