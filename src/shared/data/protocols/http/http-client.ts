import { HttpRequest, HttpResponse } from './types';

export interface HttpClient {
  request<BodyT = any>(data: HttpRequest): Promise<HttpResponse<BodyT>>;
}
