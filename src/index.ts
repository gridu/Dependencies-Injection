import type { User } from './types';
import { ioc } from "./ioc";

const renderUsers = async () => {
  const usersService = ioc.resolve('users');
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = async () => {
  await renderUsers();
};

window.onload = async () => {
  const logger = ioc.resolve('logger');

  logger.info('Page is loaded.');

  await app();
};
