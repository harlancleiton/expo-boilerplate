import {
  ACCESS_TOKEN,
  HttpClient,
  REFRESH_TOKEN,
  Storage
} from '../../../data';
import { HttpRequest, HttpResponse } from '../../../data/protocols/http/types';

type FailedQueuesRequests = (newAccessToken: string) => void;

export class RefreshTokenHttpClientDecorator implements HttpClient {
  private static isAlreadyFetchingAccessToken = false;
  private static readonly failedQueuesRequests: FailedQueuesRequests[] = [];

  constructor(
    private readonly httpClient: HttpClient,
    private readonly storage: Storage
  ) {}

  async request<ResponseBodyT = any>(
    config: HttpRequest
  ): Promise<HttpResponse<ResponseBodyT>> {
    try {
      const response = await this.httpClient.request(config);
      return response;
    } catch (error) {
      if (!error.response) {
        return Promise.reject(error);
      }

      if (!this.isAccessTokenExpiredError(error.response)) {
        return Promise.reject(error);
      }

      const refreshToken = await this.storage.getItem<string>(REFRESH_TOKEN);

      if (!refreshToken) return Promise.reject(error);

      return this.getNewAccessTokenAndReattemptRequest(error);
    }
  }

  private isAccessTokenExpiredError(response: HttpResponse<any>): boolean {
    const statusCodeIsUnauthorized = response.status === 401;

    return statusCodeIsUnauthorized;
  }

  private async getNewAccessTokenAndReattemptRequest(error: any): Promise<any> {
    try {
      const { response } = error;

      const retryOriginalRequest = this.getRetryOriginalRequest(response);

      if (!RefreshTokenHttpClientDecorator.isAlreadyFetchingAccessToken) {
        RefreshTokenHttpClientDecorator.isAlreadyFetchingAccessToken = true;

        const session = await this.getNewAccessToken();

        if (!session) return Promise.reject(error);

        const { accessToken, refreshToken } = session;

        await this.storage.setItem(ACCESS_TOKEN, accessToken);
        await this.storage.setItem(REFRESH_TOKEN, refreshToken);

        RefreshTokenHttpClientDecorator.isAlreadyFetchingAccessToken = false;
        RefreshTokenHttpClientDecorator.failedQueuesRequests.forEach(
          failedRequest => failedRequest(accessToken)
        );

        RefreshTokenHttpClientDecorator.failedQueuesRequests.splice(
          0,
          RefreshTokenHttpClientDecorator.failedQueuesRequests.length
        );
      }

      return retryOriginalRequest;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  private getRetryOriginalRequest(response: HttpResponse<any>): Promise<any> {
    return new Promise(resolve => {
      RefreshTokenHttpClientDecorator.failedQueuesRequests.push(
        newAccessToken => {
          const requestConfig = response.config;

          resolve(
            this.httpClient.request({
              ...requestConfig,
              headers: {
                ...requestConfig.headers,
                Authorization: `Bearer ${newAccessToken}`
              }
            })
          );
        }
      );
    });
  }

  private async getNewAccessToken(): Promise<{
    accessToken: string;
    refreshToken: string;
  }> {
    try {
      const refreshToken = await this.storage.getItem<string>(REFRESH_TOKEN);

      const response = await this.httpClient.request<{
        accessToken: string;
        refreshToken: string;
      }>({
        method: 'post',
        url: 'auth/refresh-token',
        data: { refreshToken }
      });

      return response.data;
    } catch (error) {
      return undefined;
    }
  }
}
