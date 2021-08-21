import { UserModel } from '../../../auth';

export interface GetMe {
  execute(): Promise<UserModel>;
}
