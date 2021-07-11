import React from 'react';

import { Authentication, CredentialsModel, UserModel } from '../../../domain';

export type SignInHandler = (
  credentials: CredentialsModel
) => Promise<UserModel>;

export interface AuthContextProps {
  user: UserModel | null;

  signed: boolean;

  signIn(credentials: CredentialsModel): Promise<UserModel>;

  signOut(): void;

  loadingSignIn: boolean;
}

export interface AuthProviderProps {
  children: React.ReactNode;

  authentication: Authentication;
}
