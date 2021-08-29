import { HttpClient, RemoteTemplateMethod } from '../../../../shared';
import { HttpMethod } from '../../../../shared/data/protocols/http/types';
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
}
