import { Input } from '../shared';

const TodoInput = () => {
  return (
    <section id="todo-input-section">
      <div className="grid">
        <form>
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
