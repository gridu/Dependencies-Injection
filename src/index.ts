import { createIoCContainer } from './ioc/index';
import type { ILogger, IUsers, User } from './types';

const ioc = createIoCContainer();

const renderUsers = async () => {
  const usersService: IUsers = ioc.resolve('users');
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => renderUsers();

window.onload = (event: Event) => {
  const logger: ILogger = ioc.resolve('logger');

  logger.info('Page is loaded.');

  app();
};
