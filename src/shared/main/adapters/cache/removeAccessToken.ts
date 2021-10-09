import { ACCESS_TOKEN } from '../../../data';
import { makeStorage } from '../../factories';

export function removeAccessTokenAdapter() {
  return makeStorage().deleteItem(ACCESS_TOKEN);
}
