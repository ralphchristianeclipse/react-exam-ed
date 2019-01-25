import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import './App.css';
import { routes } from './routes';

import LayoutDefault from './layouts/LayoutDefault';
import Toolbar from './components/Toolbar';
import apollo from './apollo';
console.log(routes);
/* Map All routes to a Route Component and spread the route props using spread operator */
export const getRouterViews = routes =>
  routes.map(route => <Route {...route} key={route.path} />);

const links = [
  {
    path: '/animals',
    name: 'Animals'
  },
  {
    path: '/fruitveg',
    name: 'Fruits and Vegetables'
  }
];
const App = props => {
  const routerViews = getRouterViews(routes);
  const routerLinks = links.map(link => (
    <NavLink
      style={{
        textDecoration: 'none',
        color: '#FFF',
        fontVariant: 'small-caps',
        marginLeft: '10px',
        alignSelf: 'center'
      }}
      to={link.path}
      key={link.path}
    >
      {link.name}
    </NavLink>
  ));
  return (
    <ApolloProvider client={apollo}>
      <ApolloHooksProvider client={apollo}>
        <Router>
          <LayoutDefault header={<Toolbar>{routerLinks}</Toolbar>}>
            <Switch>{routerViews}</Switch>
          </LayoutDefault>
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

export default App;
