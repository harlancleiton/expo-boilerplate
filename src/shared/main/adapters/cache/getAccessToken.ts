import { ACCESS_TOKEN } from '../../../data';
import { makeStorage } from '../../factories';

export function getAccessTokenAdapter() {
  return makeStorage().getItem<string>(ACCESS_TOKEN);
}
