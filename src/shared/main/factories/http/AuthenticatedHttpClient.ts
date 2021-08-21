import { HttpClient } from '../../../data';
import { AutheticatedHttpClientDecorator } from '../../decorators';
import { makeStorage } from '../cache';
import { makeHttpClient } from './HttpClient';

export function makeAuthenticatedHttpClient(): HttpClient {
  return new AutheticatedHttpClientDecorator(makeHttpClient(), makeStorage());
}
