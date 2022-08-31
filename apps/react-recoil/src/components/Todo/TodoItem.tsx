import { useRecoilState } from 'recoil';
import { todoItemState } from '../../recoil/todo/atom';

const CompleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-check"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const RemoveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-trash-2"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const TodoItem = ({ id }: { id: string }) => {
  const [todo, setTodo] = useRecoilState(todoItemState(id));
  const classNames = `row ${todo.isComplete && 'todo-complete'}`;

  setTodo({
    id,
    title: todo.title,
    isComplete: todo.isComplete,
  });

  return (
    <div className={classNames} id={todo.id}>
      <div className="todo-title">
        <span>{todo.id}</span>
      </div>
      <div className="todo-action">
        <span className="complete">
          <CompleteIcon />
        </span>
        <span className="remove">
          <RemoveIcon />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
