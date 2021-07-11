import { HttpClient } from '../../../data';
import { AxiosHttpClient } from '../../../infra';

export function makeHttpClient(): HttpClient {
  // TODO add environment variables
  const baseURL = 'http://172.16.0.60:3333/';

  return new AxiosHttpClient({ baseURL });
}
