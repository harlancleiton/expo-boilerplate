import React from 'react';

import { useExecute } from '../../../../shared/presentational';
import { UserModel } from '../../../domain';
import { AuthContextProps, AuthProviderProps, SignInHandler } from './types';

export const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children, authentication }: AuthProviderProps) {
  const [user, setUser] = React.useState<UserModel>(null);
  const [loadingSignIn, setLoadingSignIn] = React.useState(false);

  const execute = useExecute(authentication);

  const signIn = React.useCallback<SignInHandler>(async credentials => {
    setLoadingSignIn(true);

    const response = await execute(credentials);

    const { status, data: session } = response;

    if (status === 'success') setUser(session.user);
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
