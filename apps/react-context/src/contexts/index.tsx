import { createContext } from 'react';

type TodoType = { id: string; title: string; completed: boolean };

export type TodoContextType = {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
};

export type CounterTextType = {
  count: number;
  setCount: (count: number) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);
export const CounterContext = createContext<CounterTextType | null>(null);
