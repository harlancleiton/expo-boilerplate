import React from 'react';

import {
  AuthContextProps,
  AuthProviderProps,
  SignInCredentials,
  User
} from './types';

export const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user] = React.useState<User>(null);
  const [loadingSignIn] = React.useState(true);

  const signIn = React.useCallback(async (credentials: SignInCredentials) => {
    console.log('credentials: ', credentials);
  }, []);

  const signOut = React.useCallback(async () => {
    //
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
