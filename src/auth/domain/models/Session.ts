import { UserModel } from './user';

export interface SessionModel {
  accessToken: string;

  refreshToken: string;

  user: UserModel;
}
