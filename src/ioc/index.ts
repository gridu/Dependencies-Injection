import IoCContainer from "ioc-lite";
import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";
import type { ApiConfig } from "src/types";

type IoCResources = {
  apiConfig: ApiConfig;
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
};

const createIoCContainer = () => {
  const ioc = new IoCContainer<IoCResources>();
  // you can register some resources right now below...
  ioc.registerClass("logger", Logger);
  ioc.registerClass("http", HTTP);
  ioc.registerClass("users", Users);

  return ioc;
};

export const ioc = createIoCContainer();
