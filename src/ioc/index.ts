import IoCContainer from "ioc-lite";
import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";

export const createIoCContainer = () => {
    const ioc = new IoCContainer();
    ioc.registerClass("user", Users);
    ioc.registerClass("http", HTTP);
    ioc.registerClass("logger", Logger);
    return ioc;
};