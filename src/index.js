import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import apollo from './apollo';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Root = () => (
  <ApolloProvider client={apollo}>
    <ApolloHooksProvider client={apollo}>
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </ApolloHooksProvider>
  </ApolloProvider>
);
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
