import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoDisplaySection from './TodoDisplaySection';
import TodoInputSection from './TodoInputSection';
import { TodoContext, TodoContextType } from '../../contexts';

const Todo = () => {
  const { todos, setTodos } = React.useContext(TodoContext) as TodoContextType;

  const submitHandler = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { elements } = event.target as HTMLFormElement;
      const { value: title } = elements.namedItem('todo-input') as HTMLInputElement;

      const todoItem = { id: uuidv4(), title, completed: false };
      setTodos([...todos, todoItem]);

      (elements.namedItem('todo-input') as HTMLInputElement).value = '';
    },
    [todos, setTodos],
  );

  const props = {
    todos,
    completeHandler: (id: string) => {
      props.todos = props.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
      setTodos(props.todos);
    },
    removeHandler: (id: string) => {
      props.todos = props.todos.filter(todo => todo.id !== id);
      setTodos(props.todos);
    },
  };

  return (
    <section id="todo-area">
      <TodoInputSection submitHandler={submitHandler} />
      <TodoDisplaySection {...props} />
    </section>
  );
};

export default Todo;
