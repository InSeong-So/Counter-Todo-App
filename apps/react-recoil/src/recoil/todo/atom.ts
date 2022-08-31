import { atomFamily, selectorFamily } from 'recoil';
import { TodoTypes } from '../../@types';
import { getTodoData, getTodoList, setTodoData } from '../../api';

export const todoListState = atomFamily<TodoTypes[], null>({
  key: 'todoListState',
  default: getTodoList,
});

export const todoItemState = selectorFamily<TodoTypes, string>({
  key: 'todoItemState',
  get: id => () => {
    const todo = getTodoData(id);
    return {
      id,
      title: todo.title,
      isComplete: todo.isComplete,
    };
  },
  set: id => async (_, payload) => {
    try {
      await setTodoData((payload as TodoTypes).id);
    } catch (error) {
      console.log(error);
      throw new Error((error as Error).message);
    }
  },
});
