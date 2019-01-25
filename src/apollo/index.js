import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import resolvers from './resolvers';

const cache = new InMemoryCache();

const linkState = withClientState({
  cache,
  resolvers
});

const link = ApolloLink.from([linkState]);

const client = new ApolloClient({
  link,
  cache
});

export default client;
