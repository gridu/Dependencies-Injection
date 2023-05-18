import type { ApiConfig, IHTTP, User } from '../types';

export class Users {
  http: IHTTP;
  apiConfig: ApiConfig;

  static $inject = ['http', 'apiConfig']

  constructor(http: IHTTP, apiConfig: ApiConfig) {
    this.http = http;
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
