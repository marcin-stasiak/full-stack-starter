import { ApolloClient, InMemoryCache } from '@apollo/client';

const endpointUrl = new URL('/graphql', process.env.NEXT_PUBLIC_URI_ORIGIN);

const client = new ApolloClient({
  uri: endpointUrl.toString(),
  cache: new InMemoryCache(),
});

export default client;
