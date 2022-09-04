import { atom, selector, selectorFamily } from 'recoil';
import { TodoTypes } from '../../@types';
import { getTodoList, getTodoData, setTodoData, addTodoData } from '../../api';
import { guardRecoilDefaultValue } from '../../utils';

/**
 * 1. 전체 할일 목록 가져오기
 * 2. 할일 하나 가져오기: id
 * 3. 할일 추가하기: title
 * 4. 할일 상태 변경하기: id
 * 5. 할일 삭제하기: id
 */

// recoil이 흩어져야 하나....?????
export const todoListAtom = atom<TodoTypes[]>({
  key: 'todoListAtom',
  default: selector({
    key: 'todoListAtom/Default',
    get: async () => {
      const todoList = await getTodoList();
      // 동작처리
      return todoList;
    },
    set: async ({ set, get }, newValue) => {
      const currentTodoList = get(todoListAtom);
      set(todoListAtom, currentTodoList);
    },
  }),
});

export const todoSelector = selector({
  key: 'todoSelector',
  get: () => {},
  set: () => {},
});

export const todoSelectorFamily = selectorFamily({
  key: 'todoSelectorFamily',
  get: () => async (_, id) => {
    const todoItem = await getTodoData(id);
    return todoItem;
  },
  set: () => async (context, newValue) => {
    if (guardRecoilDefaultValue(newValue)) return;

    if (newValue.id === undefined) return await addTodoData(newValue.title);
    return await setTodoData(newValue.id);
  },
});
