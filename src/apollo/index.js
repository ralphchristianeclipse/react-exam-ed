import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import resolvers from './resolvers';
import { HttpLink } from 'apollo-link-http';

const introspectionQueryResultData = {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'Item',
        possibleTypes: [{ name: 'Animal' }, { name: 'FruitAndVegetable' }]
      }
    ]
  }
};

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const linkHttp = new HttpLink({
  uri: 'https://k2xzw6llv5.sse.codesandbox.io/'
});

const cache = new InMemoryCache({ fragmentMatcher });

const linkState = withClientState({
  cache,
  resolvers
});

const link = ApolloLink.from([linkState, linkHttp]);

const client = new ApolloClient({
  link,
  cache
});

export default client;
