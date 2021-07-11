import React from 'react';

import { UserModel } from '../../../domain';
import { AuthContextProps, AuthProviderProps, SignInHandler } from './types';

export const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children, authentication }: AuthProviderProps) {
  const [user, setUser] = React.useState<UserModel>(null);
  const [loadingSignIn, setLoadingSignIn] = React.useState(true);

  const signIn = React.useCallback<SignInHandler>(async credentials => {
    try {
      setLoadingSignIn(true);

      const response = await authentication.execute(credentials);

      const { user: userFromResponse } = response;

      setUser(userFromResponse);

      return userFromResponse;
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setLoadingSignIn(false);
    }
  }, []);

  const signOut = React.useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signIn,
        signOut,
        loadingSignIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
