import NProgress from 'nprogress'
import React, { useEffect, useState } from 'react'
import { Box, ChakraProvider, CSSReset, Heading } from '@chakra-ui/react'
import { Router } from 'next/router'

import { theme } from '../styles'
import { __backendUri__ } from '../utils/constants'
import { setAccessToken } from '../utils/accessToken'

import type { AppProps } from 'next/app';
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
    }).then(async (res) => {
      const data = await res.json();
      setAccessToken(data.accessToken);
      setLoading(false);
    });
  }, [setAccessToken]);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {loading ? (
        <Box>
          <Heading>Loading</Heading>
        </Box>
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  );
};
export default App;
