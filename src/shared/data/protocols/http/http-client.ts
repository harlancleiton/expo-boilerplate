import { HttpRequest, HttpResponse } from './types';

export interface HttpClient {
  request<ResponseBodyT = any>(
    data: HttpRequest
  ): Promise<HttpResponse<ResponseBodyT>>;
}
