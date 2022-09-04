import { useRecoilValue } from 'recoil';
import { todoListAtom } from '../../recoil/todo/atom';
import TodoItem from './TodoItem';

const TodoDisplay = () => {
  const todoList = useRecoilValue(todoListAtom);

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
