import { ACCESS_TOKEN } from '../../../data';
import { makeStorage } from '../../factories';

export function setAccessTokenAdapter(accessToken: string) {
  return makeStorage().setItem(ACCESS_TOKEN, accessToken);
}
