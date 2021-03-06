import {
  AppError,
  HttpClient,
  RemoteTemplateMethod,
  UnauthorizedError
} from '../../../../shared';
import {
  HttpMethod,
  HttpResponse
} from '../../../../shared/data/protocols/http/types';
import {
  Authentication,
  CredentialsModel,
  SessionModel
} from '../../../domain';

export class RemoteAuthentication
  extends RemoteTemplateMethod<SessionModel>
  implements Authentication
{
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getUrl(): string {
    return 'auth/login';
  }

  getMethod(): HttpMethod {
    return 'post';
  }

  getRequestBody(credentials: CredentialsModel) {
    return credentials;
  }

  exceptionFactory(error: any): AppError {
    if (!error.response) {
      return super.exceptionFactory(error);
    }

    const response: HttpResponse = error.response;

    if (response.status !== 401) {
      return super.exceptionFactory(error);
    }

    return new UnauthorizedError(
      'Usuario ou senha incorretos',
      'Se esqueceu sua senha é facil recuperá-la, basta clicar em "esqueci minha senha"'
    );
  }
}
