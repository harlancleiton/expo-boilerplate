import { HttpClient } from '../../../data';
import { AxiosHttpClient } from '../../../infra';

export function makeHttpClient(): HttpClient {
  // TODO add environment variables
  const baseURL = 'http://localhost:3333/';

  const httpClient = new AxiosHttpClient({ baseURL });

  return httpClient;
}
