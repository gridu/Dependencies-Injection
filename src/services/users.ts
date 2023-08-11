import { HTTP } from "./http";

import type { ApiConfig, User } from "../types";
import { createIoCContainer } from "../ioc/index";
export class Users {
  http: HTTP;
  apiConfig: ApiConfig;

  static $inject = ["apiConfig", "http"];

  constructor(apiConfig: ApiConfig) {
    this.http = createIoCContainer().resolve("http");
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
