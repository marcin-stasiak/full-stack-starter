import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const endpointUrl = new URL('/graphql', 'http://localhost:3000/');

const client = new ApolloClient({
  link: createHttpLink({
    uri: endpointUrl.toString(),
  }),
  cache: new InMemoryCache(),
});

export default client;
