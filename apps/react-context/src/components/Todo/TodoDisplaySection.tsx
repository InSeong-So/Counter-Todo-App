import { CompleteIcon, RemoveIcon } from '../Icons';

type TodoDisplaySectionProps = {
  todos: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  completeHandler: (id: string) => void;
  removeHandler: (id: string) => void;
};

const TodoDisplaySection = ({ todos, completeHandler, removeHandler }: TodoDisplaySectionProps) => (
  <section id="todo-display">
    <article id="todo-content">
      {todos.map(({ id, title, completed }) => (
        <div className={`row ${completed ? 'complete-todo' : ''}`} key={`todo-${id}`}>
          <div className="todo-title">
            <span>{title}</span>
          </div>
          <div className="todo-action">
            <span className="complete" onClick={() => completeHandler(id)}>
              <CompleteIcon />
            </span>
            <span className="remove" onClick={() => removeHandler(id)}>
              <RemoveIcon />
            </span>
          </div>
        </div>
      ))}
    </article>
  </section>
);

export default TodoDisplaySection;
