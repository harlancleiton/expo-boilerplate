import { Storage } from '../../../data';
import { ExpoSecureStore } from '../../../infra';

export function makeStorage(): Storage {
  return new ExpoSecureStore();
}
