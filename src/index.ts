import { Users } from './services/users';
import { Logger, ILogger } from './services/logger';
import { createIoCContainer } from './ioc/index';
import type { User, IApiConfig } from './types';

const ioc = createIoCContainer();

const renderUsers = async () => {
  const usersService = ioc.resolve('users');
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  })
};

const app = () => {
  renderUsers();
};

window.onload = (event: Event) => {
  const logger = new Logger();

  logger.info('Page is loaded.');

  app();
};
