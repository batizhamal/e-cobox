import { API } from ".";

export class AuthApi extends API {
  register(data: any): Promise<any> {
    return this.post(`/register/`, data);
  }
}
