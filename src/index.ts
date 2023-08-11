import { Users } from "./services/users";
import { Logger } from "./services/logger";

import type { User } from "./types";
import { createIoCContainer } from "./ioc";

const renderUsers = async () => {
  // Resolve resources
  const usersService = createIoCContainer().resolve("users");

  const users = await usersService.getUsers();

  const listNode = document.getElementById("users-list");

  users.forEach((user: User) => {
    const listItemNode = document.createElement("li");

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

export const config = (window as any).__CONFIG__;

const app = () => {
  delete (window as any).__CONFIG__;

  renderUsers();
};

window.onload = () => {
  const logger = createIoCContainer().resolve("logger");

  logger.info("Page is loaded.");

  app();
};
