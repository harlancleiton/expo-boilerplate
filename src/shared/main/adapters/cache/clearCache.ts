import { makeStorage } from '../../factories';

export function clearCacheAdapter() {
  return makeStorage().clear();
}
