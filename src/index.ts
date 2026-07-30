import { createIoCContainer } from './ioc';

import type { User } from './types';

const renderUsers = (users: User[]) => {
  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = async (ioc: ReturnType<typeof createIoCContainer>) => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  ioc.register('config', config.api);

  const usersService = ioc.resolve('users');
  const users = await usersService.getUsers();

  renderUsers(users);
};

window.onload = (event: Event) => {
  const ioc = createIoCContainer();
  const logger = ioc.resolve('logger');

  logger.info('Page is loaded.');

  app(ioc);
};
