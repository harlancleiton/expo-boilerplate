import { makeRefreshTokenHttpClient } from '../../../../shared/main';
import { RemoteGetMe } from '../../../data';
import { GetMe } from '../../../domain';

export function makeGetMe(): GetMe {
  return new RemoteGetMe(makeRefreshTokenHttpClient());
}
