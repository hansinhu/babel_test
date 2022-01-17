import { join } from 'path';
import { Haha } from './hehe';
import { getUserAge } from './hehe';

function age() {
  return 30;
}

function testAdd(a, b) {
  return a + b;
}

const services = {
  fetchUsers: () => [],
  getUserAge: () => "aq";
};
export { testAdd };