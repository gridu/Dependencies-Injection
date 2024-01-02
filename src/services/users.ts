import { HTTP } from './http';
import type { ApiConfig, User } from '../types';

export class Users {
  http: HTTP;
  apiConfig: ApiConfig;

  static $inject = ['http', 'config'];

  constructor(http: HTTP, config: ApiConfig) {
    this.http = http;
    this.apiConfig = config;
  }

  async getUsers() {
    return await this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
