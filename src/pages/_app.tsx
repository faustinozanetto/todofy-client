import React, { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '../styles';
import { Router } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { client } from '../utils/apollo/withApollo';
import type { AppProps } from 'next/app';
import { __backendUri__ } from '../utils/constants';
import axios from 'axios';
import { setAccessToken } from '../utils/accessToken';

// NProgress event binds
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${__backendUri__}/refresh_token`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (x) => {
      const { accessToken } = await x.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, [setAccessToken]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
};
export default App;
