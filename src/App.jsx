import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import './App.sass';
import { routes } from './routes';

import LayoutDefault from './layouts/LayoutDefault';
import Toolbar from './components/Toolbar';
import apollo from './apollo';
import styled from '@emotion/styled';
console.log(routes);
/* Map All routes to a Route Component and spread the route props using spread operator */
export const getRouterViews = routes =>
  routes.map(route => <Route {...route} key={route.path} />);

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

const RouteNotFound = () => <h1> 404 Not Found </h1>;

const ToolbarLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  margin-left: 10px;
  align-self: center;
  padding: 0px 0.5rem 0.25rem;
  border-right: 0.25rem solid #0f2027;
  border-bottom: 0.25rem solid #0f2027;
  transition: 0.5s ease-in-out;
  border-radius: 5px;

  &.active {
    border-left: 0.25rem solid #2c5364;
    border-top: 0.25rem solid #2c5364;
    border-right: 0;
    border-bottom: 0;
  }
`;

const App = props => {
  const routerViews = getRouterViews(routes);
  const routerLinks = links.map(link => (
    <ToolbarLink to={link.path} key={link.path}>
      {link.name}
    </ToolbarLink>
  ));
  console.log(props);
  return (
    <ApolloProvider client={apollo}>
      <ApolloHooksProvider client={apollo}>
        <Router>
          <LayoutDefault header={<Toolbar>{routerLinks}</Toolbar>}>
            <Switch>
              {routerViews}
              <Route component={RouteNotFound} />
            </Switch>
          </LayoutDefault>
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

export default App;
