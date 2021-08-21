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
  getAccessToken(): Promise<string>;
  getMe: GetMe;
  setAccessToken(accessToken: string): Promise<void>;
}
