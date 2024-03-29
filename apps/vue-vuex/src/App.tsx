import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
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
                </span>
                <span className="remove">
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
                </span>
              </div>
            </div>
          </article>
        </section>
      </section>
      <hr />
      <section>
        <section id="counter-display">
          <article>
            <h1 id="counter">0</h1>
          </article>
        </section>
        <section id="buttons">
          <div className="grid">
            <button id="sub">-1</button>
            <button id="reset" className="contrast">
              RESET
            </button>
            <button id="add" className="secondary">
              +1
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
