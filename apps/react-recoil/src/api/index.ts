import { v4 as uuidv4 } from 'uuid';
import { TodoTypes } from '../@types';

let serverStore: TodoTypes[] = [];

export const getTodoData = async (id: string): Promise<TodoTypes> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const item = serverStore.find(todo => todo.id === id);
      if (item === undefined) throw new Error('none data');
      resolve(item);
    }, 1000);
  });
};

export const getTodoList = async (): Promise<TodoTypes[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(serverStore), 1000);
  });
};

export const addTodoData = async (title: string): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(() => {
      serverStore.push({
        id: uuidv4(),
        title,
        isComplete: false,
      });
      resolve();
    }, 1000);
  });
};

export const setTodoData = async (id: TodoTypes['id']) => {
  return new Promise(resolve => {
    setTimeout(() => {
      serverStore = serverStore.map(todo => (todo.id === id ? { ...todo, isFinite: !todo.isComplete } : todo));
      return resolve(serverStore);
    }, 1000);
  });
};
