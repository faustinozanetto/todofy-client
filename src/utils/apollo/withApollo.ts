import { NextPageContext } from 'next';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createWithApollo } from './createWithApollo';
import { __backendUri__ } from '../constants';

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: __backendUri__ as string,
    credentials: 'include',
    headers: {
      cookie:
        (typeof window === 'undefined'
          ? ctx?.req?.headers.cookie
          : undefined) || '',
    },
    cache: new InMemoryCache({}),
  });

export const withApollo = createWithApollo(createClient);
