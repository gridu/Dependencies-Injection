import IoCContainer from "ioc-lite";

import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";

import type { ApiConfig } from "../types";

export const createIoCContainer = (apiConfig: ApiConfig) => {
  const ioc = new IoCContainer();
  ioc.registerClass("user", Users);
  ioc.registerClass("http", HTTP);
  ioc.registerClass("logger", Logger);
  ioc.register("apiConfig", apiConfig);
  return ioc;
};
