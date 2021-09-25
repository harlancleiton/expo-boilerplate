import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { HttpClient } from '../../data';
import { HttpRequest, HttpResponse } from '../../data/protocols/http/types';

export class AxiosHttpClient implements HttpClient {
  private readonly axiosInstance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
  }

  request<Request, Response>(
    data: HttpRequest<Request>
  ): Promise<HttpResponse<Response>> {
    return this.axiosInstance.request(data);
  }
}
