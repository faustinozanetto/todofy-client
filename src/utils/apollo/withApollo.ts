import { NextPageContext } from 'next';
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  Observable,
} from '@apollo/client';
import { createWithApollo } from './createWithApollo';
import { __backendUri__ } from '../constants';
import { getAccessToken, setAccessToken } from '../accessToken';
import jwtDecode from 'jwt-decode';
import { TokenRefreshLink } from 'apollo-link-token-refresh';

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any;
      Promise.resolve(operation)
        .then((operation) => {
          const accessToken = getAccessToken();
          if (accessToken) {
            operation.setContext({
              headers: {
                authorization: `bearer ${accessToken}`,
              },
            });
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) {
          handle.unsubscribe();
        }
      };
    })
);

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    link: ApolloLink.from([
      new TokenRefreshLink({
        accessTokenField: 'accessToken',
        isTokenValidOrUndefined: () => {
          const token = getAccessToken();
          if (!token) {
            return true;
          }

          try {
            const { exp }: any = jwtDecode(token);
            if (Date.now() >= exp * 1000) {
              return false;
            } else {
              return true;
            }
          } catch (error) {
            return false;
          }
        },
        fetchAccessToken: () => {
          return fetch('http://localhost:4000/refresh_token', {
            method: 'POST',
            credentials: 'include',
          });
        },
        handleFetch: (accessToken: string) => {
          setAccessToken(accessToken);
        },
        handleError: (err) => {
          console.warn('Your refresh token is invalid. Try to re-login');
          console.error(err);
        },
      }),
      requestLink,
      new HttpLink({
        uri: 'http://localhost:4000/graphql',
        credentials: 'include',
      }),
    ]),
    cache: new InMemoryCache({}),
  });

export const withApollo = createWithApollo(createClient);
