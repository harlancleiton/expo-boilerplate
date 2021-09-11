import {
  AppError,
  BadRequestError,
  HttpClient,
  RemoteTemplateMethod
} from '../../../../shared';
import {
  HttpMethod,
  HttpResponse
} from '../../../../shared/data/protocols/http/types';
import { ResetPassword, ResetPasswordModel } from '../../../domain';

export class RemoteResetPassword
  extends RemoteTemplateMethod<void>
  implements ResetPassword
{
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getRequestBody({ token, password }: ResetPasswordModel) {
    return { token, password, passwordConfirmation: password };
  }

  getUrl(): string {
    return 'auth/reset-password';
  }

  getMethod(): HttpMethod {
    return 'put';
  }

  exceptionFactory(error: any): AppError {
    if (!error.response) {
      return super.exceptionFactory(error);
    }

    const response: HttpResponse = error.response;

    if (response.status !== 404) {
      return super.exceptionFactory(error);
    }

    return new BadRequestError(
      'Link expirado',
      'Por favor, gere outro link e tente novamente'
    );
  }
}
