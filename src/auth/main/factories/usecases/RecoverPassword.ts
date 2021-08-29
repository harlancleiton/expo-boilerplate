import { makeHttpClient } from '../../../../shared/main';
import { RemoteRecoverPassword } from '../../../data';
import { RecoverPassword } from '../../../domain';

export function makeRecoverPassword(): RecoverPassword {
  return new RemoteRecoverPassword(makeHttpClient());
}
