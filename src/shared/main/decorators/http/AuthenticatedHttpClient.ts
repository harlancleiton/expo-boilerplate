import { ACCESS_TOKEN, HttpClient, Storage } from '../../../data';
import { HttpRequest, HttpResponse } from '../../../data/protocols/http/types';

export class AutheticatedHttpClientDecorator implements HttpClient {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly storage: Storage
  ) {}

  async request<BodyT>(config: HttpRequest): Promise<HttpResponse<BodyT>> {
    const hasBeenAuthenticated = !!config.headers?.Authorization;

    if (hasBeenAuthenticated) {
      return this.httpClient.request(config);
    }

    const accessToken = await this.storage.getItem(ACCESS_TOKEN);

    if (!accessToken) {
      return this.httpClient.request(config);
    }

    const accessTokenType = 'Bearer';

    const authorizedRequestConfig = {
      ...config,
      headers: {
        ...config.headers,
        authorization: `${accessTokenType} ${accessToken}`
      }
    };

    return this.httpClient.request(authorizedRequestConfig);
  }
}
