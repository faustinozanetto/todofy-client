import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  Observable,
} from '@apollo/client';
import { __backendUri__, __isServer__ } from '../constants';
import { getAccessToken, setAccessToken } from '../accessToken';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import { createWithApollo } from './createWithApollo';
import { TodosResponse } from '../../generated/graphql';
import jwtDecode from 'jwt-decode';
import { NextPageContext } from 'next';

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
                authorization: `Bearer ${accessToken}`,
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
        if (handle) handle.unsubscribe();
      };
    })
);
    
const createClient = (_ctx: NextPageContext) =>
  new ApolloClient({
    uri: __backendUri__ as string,
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
          } catch {
            return false;
          }
        },
        fetchAccessToken: () => {
          return fetch(`${__backendUri__}/refresh_token`, {
            method: 'POST',
            credentials: 'include',
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          });
        },
        handleFetch: (accessToken) => {
          const accessTokenDecrypted = jwtDecode(accessToken);
          setAccessToken(accessToken);
          console.log('Decrypted access token: ', accessTokenDecrypted);
        },
        handleError: (err) => {
          console.warn('Your refresh token is invalid. Try to re-login');
          console.error(err);
        },
      }),
      requestLink,
      new HttpLink({
        uri: `${__backendUri__}/graphql`,
        credentials: 'include',
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            userTodos: {
              keyArgs: [],
              merge(
                existing: TodosResponse | undefined,
                incoming: TodosResponse
              ): TodosResponse {
                return {
                  ...incoming,
                  todos: [...(existing?.todos || []), ...incoming.todos],
                };
              },
            },
          },
        },
      },
    }),
    credentials: 'include',
  });
export const withApollo = createWithApollo(createClient);
