import { CredentialsModel, SessionModel } from '../models';

export interface Authentication {
  execute(credentials: CredentialsModel): Promise<SessionModel>;
}
