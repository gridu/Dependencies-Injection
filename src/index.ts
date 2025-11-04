import { createIoCContainer } from "./ioc";
import type { User, ApiConfig } from "./types";

const renderUsers = async (config: ApiConfig, ioc: any) => {
  // here i register config as a constant value
  ioc.register("apiConfig", config);

  // Here i resolve usersService with all dependencies injected
  const usersService = ioc.resolve("Users");
  const users = await usersService.getUsers();

  const listNode = document.getElementById("users-list");
  users.forEach((user: User) => {
    const listItemNode = document.createElement("li");
    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  const ioc = createIoCContainer();
  renderUsers(config.api, ioc);
};

window.onload = () => {
  const ioc = createIoCContainer();
  const logger = ioc.resolve("Logger");
  logger.info("Page is loaded.");

  app();
};
