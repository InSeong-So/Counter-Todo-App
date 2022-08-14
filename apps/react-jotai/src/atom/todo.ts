import { atom } from 'jotai';
import { sleep } from '../utils';

type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};

const todoAtom = atom<TodoType[]>([]);

export const readonlyTodoAtom = atom(async get => {
  await sleep(1000);
  return get(todoAtom);
});

export const writeTodoAtom = atom<null, TodoType[], Promise<void>>(null, async (get, set, payload) => {
  set(todoAtom, payload);
});
