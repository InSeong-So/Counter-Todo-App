import { FormEvent } from 'react';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { TodoTypes } from '../../@types';
import { todoListState } from '../../recoil/todo/atom';
import { Input } from '../shared';

const TodoInput = () => {
  const addTodo = useRecoilCallback(({ snapshot, set }) => async (todo: string) => {
    const todoList = await snapshot.getPromise(todoListState(null));
    console.log(todoList, todo);
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const $target = event.target as HTMLFormElement;
    // TODO: 일부러 ref를 사용하지 않고 바닐라스럽게 작성함
    const { value: title } = $target.elements.namedItem('todo-input') as HTMLInputElement;
    addTodo(title);
  };

  return (
    <section id="todo-input-section">
      <div className="grid">
        <form onSubmit={handleSubmit}>
          <label htmlFor="todo-input">Todo Input</label>
          <Input
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
  );
};

export default TodoInput;
