import { makeHttpClient } from '../../../../shared/main';
import { RemoteAuthentication } from '../../../data';
import { Authentication } from '../../../domain';

export function makeAuthentication(): Authentication {
  return new RemoteAuthentication(makeHttpClient());
}
