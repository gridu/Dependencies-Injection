import { IHTTP } from './http';

import type { IApiConfig, User } from '../types';

export interface IUsers {
  getUsers (): User[]
}

export class Users implements IUsers {
  private _http: IHTTP;
  private _apiConfig: IApiConfig;
  
  static $inject = ['apiConfig', 'http'];

  constructor(apiConfig: IApiConfig, http: IHTTP) {
    this._http = http;
    this._apiConfig = apiConfig;
  }

  getUsers() {
    return this._http.get(this._apiConfig.resources.users) as unknown as User[];
  }
}
