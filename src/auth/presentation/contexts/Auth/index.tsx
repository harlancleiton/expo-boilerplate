import React from 'react';

import { useExecute } from '../../../../shared/presentational';
import { UserModel } from '../../../domain';
import { AuthContextProps, AuthProviderProps, SignInHandler } from './types';

export const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({
  authentication,
  children,
  getAccessToken,
  getMe,
  setAccessToken
}: AuthProviderProps) {
  const [user, setUser] = React.useState<UserModel>(null);
  const [loadingSignIn, setLoadingSignIn] = React.useState(false);
  const [loadingPreviousLogin, setLoadingPreviousLogin] = React.useState(false);

  const executeGetMe = useExecute(getMe);

  React.useEffect(() => {
    async function loadPreviousLogin() {
      setLoadingPreviousLogin(true);
      const isAlreadySigned = !!(await getAccessToken());

      if (!isAlreadySigned) return;

      const response = await executeGetMe();

      const { status, data: userFromResponse } = response;

      setLoadingPreviousLogin(false);

      if (status === 'error') {
        // TODO remove ACCESS_TOKEN
        return;
      }

      setUser(userFromResponse);
    }

    loadPreviousLogin();
  }, [executeGetMe, getAccessToken]);

  const executeAuthentication = useExecute(authentication);

  const signIn = React.useCallback<SignInHandler>(
    async credentials => {
      setLoadingSignIn(true);

      const response = await executeAuthentication(credentials);

      const { status, data: session } = response;

      if (status === 'error') return;

      setUser(session.user);
      await setAccessToken(session.accessToken);
      setLoadingSignIn(false);
    },
    [executeAuthentication, setAccessToken]
  );

  const signOut = React.useCallback(() => {
    setUser(null);
    // TODO remove ACCESS_TOKEN
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
