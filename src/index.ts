import type { User } from "./types";
import { createIoCContainer } from "./ioc";
export const iocContainer = createIoCContainer();

const renderUsers = async () => {
  const usersService = iocContainer.resolve("user");
  const users = await usersService.getUsers();

  const listNode = document.getElementById("users-list");

  users.forEach((user: User) => {
    const listItemNode = document.createElement("li");
    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  delete (window as any).__CONFIG__;
  renderUsers();
};

window.onload = (event: Event) => {
  const logger = iocContainer.resolve("logger");
  const config = (window as any).__CONFIG__;
  iocContainer.register("apiConfig", config.api);

  logger.info("Page is loaded.");

  app();
};