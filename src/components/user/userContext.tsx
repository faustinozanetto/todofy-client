import React, { createContext, useEffect, useState } from 'react';
import { setAccessToken } from '../../utils/accessToken';
import { __backendUri__ } from '../../utils/constants';

export type ContextType = {
  auth?: Partial<AuthContextData>;
  setAuthData: (token: string) => void;
};

export const authContext = createContext<Partial<ContextType>>({});

interface AuthContextData {
  loading: boolean;
  token: string;
}

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<Partial<AuthContextData>>({
    loading: true,
    token: '',
  });
  // we will use loading later

  useEffect(() => {
    fetch(__backendUri__ + '/refresh_token', {
      method: 'POST',
      credentials: 'include',
    }).then(async (res) => {
      const { accessToken } = await res.json();
      setAuth({ token: accessToken });
    });
  }, []);

  const setAuthData = (token: string) => {
    setAuth({ token });
  };

  useEffect(() => {
    setAuth({
      loading: false,
      token: window.localStorage.getItem('authData')!,
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem('authData', auth.token!);
  }, [auth.token]);
  // a function that will help us to add the user data in the auth;

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
