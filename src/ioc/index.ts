import IoCContainer from "ioc-lite";

import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";

export const createIoCContainer = () => {
  const ioc = new IoCContainer();
  // register logger class
  ioc.registerClass("logger", Logger);
  ioc.registerClass("http", HTTP);
  ioc.registerClass("users", Users);
  // register data
  ioc.register("config", {
    host: "localhost",
    port: 8080,
  });

  return ioc;
};
