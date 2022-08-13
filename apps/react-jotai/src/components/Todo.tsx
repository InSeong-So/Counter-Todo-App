import { CompleteIcon, RemoveIcon } from './Icons';

const Todo = () => {
  return (
    <section id="todo-area">
      <section id="todo-input-section">
        <div className="grid">
          <form>
            <label htmlFor="todo-input">Todo Input</label>
            <input
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
          <div className="row" key="todo-0">
            <div className="todo-title">
              <span>테스트</span>
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
        </article>
      </section>
    </section>
  );
};

export default Todo;
