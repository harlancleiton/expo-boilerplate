import React from 'react';

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  fullname: string;
  email: string;
  birthdate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SignInResponse {
  token: string;
  refreshToken: string;
  user: User;
}

export interface AuthContextProps {
  user: User | null;
  signed: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  loadingSignIn: boolean;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
