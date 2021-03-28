import React, { useEffect, useState } from 'react';
import {
  MeQuery,
  useLoginMutation,
  useMeQuery,
  useRegisterMutation,
} from '../generated/graphql';
import { setAccessToken } from '../utils/accessToken';
import { __backendUri__, __isServer__ } from '../utils/constants';

const AuthContext = React.createContext({});

function AuthProvider(props: any) {
  const { data } = useMeQuery();
  let storedJwt: string = '';
  useEffect(() => {
    storedJwt = localStorage.getItem('token')!;
  }, []);
  const [jwt, setJwt] = useState<string>(storedJwt);

  useEffect(() => {
    fetch(__backendUri__ + '/refresh_token', {
      method: 'POST',
      credentials: 'include',
    }).then(async (res) => {
      const { accessToken } = await res.json();
      setAccessToken(accessToken);
      setJwt(accessToken);
    });
  }, []);

  // Storing JWT token in local storage
  React.useEffect(() => {
    window.localStorage.setItem('token', jwt);
  }, ['token', jwt]);

  return <AuthContext.Provider value={{ data }} {...props} />;
}

/*
const useAuth = () => React.useContext<MeQuery>(AuthContext);

export { AuthProvider, useAuth };

*/
