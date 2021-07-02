import { HttpRequest, HttpResponse } from './types';

export interface HttpClient {
  request(data: HttpRequest): Promise<HttpResponse>;
}
