import { createIoCContainer } from './ioc';
import { Logger } from './services/logger';
import { Users } from './services/users';

import type { User } from './types';

const renderUsers = async (usersService: Users) => {
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = (ioc: any) => {
  const usersService = ioc.resolve('Users');
  renderUsers(usersService);
};

window.onload = (event: Event) => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  const ioc = createIoCContainer(config.api);
  const logger = ioc.resolve('Logger');

  logger.info('Page is loaded.');

  app(ioc);
};
