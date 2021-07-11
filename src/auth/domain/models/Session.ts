import { UserModel } from './User';

export interface SessionModel {
  accessToken: string;

  refreshToken: string;

  user: UserModel;
}
