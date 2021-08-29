import { makeHttpClient } from '../../../../shared/main';
import { RemoteResetPassword } from '../../../data';
import { ResetPassword } from '../../../domain';

export function makeResetPassword(): ResetPassword {
  return new RemoteResetPassword(makeHttpClient());
}
