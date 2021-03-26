import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import { theme } from '../styles';
import { Router } from 'next/router';
import dotenv from 'dotenv';

// NProgress event binds
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

dotenv.config();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
