import { REFRESH_TOKEN } from '../../../data';
import { makeStorage } from '../../factories';

export function setRefreshTokenAdapter(refreshToken: string) {
  return makeStorage().setItem(REFRESH_TOKEN, refreshToken);
}
