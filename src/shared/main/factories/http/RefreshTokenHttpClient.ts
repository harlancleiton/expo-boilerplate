import { HttpClient } from '../../../data';
import { RefreshTokenHttpClientDecorator } from '../../decorators';
import { makeStorage } from '../cache';
import { makeAuthenticatedHttpClient } from './AuthenticatedHttpClient';

export function makeRefreshTokenHttpClient(): HttpClient {
  return new RefreshTokenHttpClientDecorator(
    makeAuthenticatedHttpClient(),
    makeStorage()
  );
}
