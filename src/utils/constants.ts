/**
 * @returns true if app is in production or false if in development.
 */
export const __prod__: boolean = process.env.NODE_ENV === 'production';

/**
 * @returns Backend URI used in Apollo Client
 */
export const __backendUri__ = __prod__
  ? 'https://apitodofy.herokuapp.com'
  : 'http://localhost:4000';

/**
 * @returns wether it is a server or not.
 */
export const __isServer__ = typeof window === 'undefined';
