import IoCContainer from "ioc-lite";

import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";

export const createIoCContainer = () => {
  const ioc = new IoCContainer();
  const config = (window as any).__CONFIG__;

  ioc.register("apiConfig", config.api);
  ioc.registerClass("user", Users);
  ioc.registerClass("http", HTTP);
  ioc.registerClass("logger", Logger);
  return ioc;
};
