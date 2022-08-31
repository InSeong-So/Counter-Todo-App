import { useRecoilValue } from 'recoil';
import { todoListState } from '../../recoil/todo/atom';
import TodoItem from './TodoItem';

const TodoDisplay = () => {
  const todoList = useRecoilValue(todoListState(null));

  return (
    <section id="todo-display">
      <article id="todo-content">
        {todoList.map(todo => (
          <TodoItem id={todo.id} key={todo.id} />
        ))}
      </article>
    </section>
  );
};

export default TodoDisplay;
