import { useAtomValue, useSetAtom } from 'jotai';
import { FormEvent, MouseEventHandler, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { readonlyTodoAtom, writeTodoAtom } from '../atom';
import { CompleteIcon, RemoveIcon } from './Icons';

const Todo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todos = useAtomValue(readonlyTodoAtom);
  const setTodos = useSetAtom(writeTodoAtom);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!inputRef.current) return;
    const title = inputRef.current.value;
    const todo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, todo]);
    inputRef.current.value = '';
  };

  const handleClick: MouseEventHandler<HTMLSpanElement> = event => {
    const $target = event.target as HTMLSpanElement;
    if ($target.matches('.complete')) {
      const { id } = $target.closest('div') as HTMLDivElement;
      const updatedTodos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));

      setTodos(updatedTodos);
    }

    if ($target.matches('.remove')) {
      const { id } = $target.closest('div') as HTMLDivElement;
      const removedTodos = todos.filter(todo => todo.id !== id);

      setTodos(removedTodos);
    }
  };

  return (
    <section id="todo-area">
      <section id="todo-input-section">
        <div className="grid">
          <form onSubmit={handleSubmit}>
            <label htmlFor="todo-input">Todo Input</label>
            <input
              ref={inputRef}
              type="text"
              id="todo-input"
              name="todo-input"
              required
              maxLength={50}
              placeholder="please input to your todo"
            />
          </form>
        </div>
      </section>
      <section id="todo-display">
        <article id="todo-content">
          {todos.map(({ id, title, completed }) => (
            <div className={`row ${completed ? 'complete-todo' : ''}`} key={id}>
              <div className="todo-title">
                <span>{title}</span>
              </div>
              <div className="todo-action" id={id}>
                <span className="complete" onClick={handleClick}>
                  <CompleteIcon />
                </span>
                <span className="remove" onClick={handleClick}>
                  <RemoveIcon />
                </span>
              </div>
            </div>
          ))}
        </article>
      </section>
    </section>
  );
};

export default Todo;
