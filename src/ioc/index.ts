import IoCContainer from "ioc-lite";
import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";

export const createIoCContainer = () => {
  const ioc = new IoCContainer();

  // Register services using register Class method
  ioc.registerClass("Logger", Logger);
  ioc.registerClass("HTTP", HTTP);
  ioc.registerClass("Users", Users);

  return ioc;
};
