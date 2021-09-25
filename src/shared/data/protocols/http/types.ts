export type Headers = {
  [key: string]: string;
};

export type HttpMethod = 'post' | 'get' | 'put' | 'delete';

export interface HttpRequest<Request = any> {
  baseURL?: string;
  url?: string;
  method?: HttpMethod;
  data?: Request;
  headers?: Headers;
}

export type HttpResponse<Response = any> = {
  config?: HttpRequest;
  status: number;
  data?: Response;
};
