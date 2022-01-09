import Layout from '../components/layout';
import '../stylesheets/globals.css';
import client from '../utilities/client';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
