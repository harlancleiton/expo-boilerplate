import React from 'react';

import { GetMe } from '../../../../users';
import { Authentication, CredentialsModel, UserModel } from '../../../domain';

export type SignInHandler = (credentials: CredentialsModel) => Promise<void>;

export interface AuthContextProps {
  user: UserModel | null;

  signed: boolean;

  signIn(credentials: CredentialsModel): Promise<void>;

  signOut(): void;

  loadingSignIn: boolean;
}

export interface AuthProviderProps {
  children: React.ReactNode;

  authentication: Authentication;
  clearCache(): Promise<void>;
  getAccessToken(): Promise<string | null>;
  getMe: GetMe;
  removeAccessToken(): Promise<void>;
  setAccessToken(accessToken: string): Promise<void>;
}
