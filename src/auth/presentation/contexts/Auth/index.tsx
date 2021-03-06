import React from 'react';

import { useExecute } from '../../../../shared';
import { UserModel } from '../../../domain';
import { AuthContextProps, AuthProviderProps, SignInHandler } from './types';

export const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({
  authentication,
  children,
  clearCache,
  getAccessToken,
  getMe,
  removeAccessToken,
  setAccessToken,
  setRefreshToken
}: AuthProviderProps) {
  const [user, setUser] = React.useState<UserModel>(null);
  const [loadingSignIn, setLoadingSignIn] = React.useState(false);
  const [, setLoadingPreviousLogin] = React.useState(false);

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
        await removeAccessToken();
        return;
      }

      setUser(userFromResponse);
    }

    loadPreviousLogin();
  }, [executeGetMe, getAccessToken, removeAccessToken]);

  const executeAuthentication = useExecute(authentication);

  const signIn = React.useCallback<SignInHandler>(
    async credentials => {
      setLoadingSignIn(true);

      const response = await executeAuthentication(credentials);

      const { status, data: session } = response;

      setLoadingSignIn(false);

      if (status === 'error') return;

      await setAccessToken(session.accessToken);
      await setRefreshToken(session.refreshToken);
      setUser(session.user);
    },
    [executeAuthentication, setAccessToken, setRefreshToken]
  );

  const signOut = React.useCallback(async () => {
    await clearCache();

    setUser(null);
  }, [clearCache]);

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
