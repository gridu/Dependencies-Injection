import type { User } from "./types";

import { createIoCContainer } from "./ioc";

import IoCContainer from "ioc-lite";

const renderUsers = async (ioc: IoCContainer) => {
  const usersService = ioc.resolve("user");
  const users = await usersService.getUsers();

  const listNode = document.getElementById("users-list");

  users.forEach((user: User) => {
    const listItemNode = document.createElement("li");

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = (ioc: IoCContainer) => {
  delete (window as any).__CONFIG__;

  renderUsers(ioc);
};

window.onload = (event: Event) => {
  const config = (window as any).__CONFIG__;
  const ioc = createIoCContainer(config.api);

  const logger = ioc.resolve("logger");

  logger.info("Page is loaded.");

  app(ioc);
};
