import React from 'react';

type TodoInputSectionProps = {
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
};

const TodoInputSection = React.forwardRef<HTMLInputElement, TodoInputSectionProps>(({ submitHandler }, ref) => (
  <section id="todo-input-section">
    <div className="grid">
      <form onSubmit={submitHandler}>
        <label htmlFor="todo-input">Todo Input</label>
        <input
          ref={ref}
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
));

export default TodoInputSection;
