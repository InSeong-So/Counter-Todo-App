const Counter = () => {
  return (
    <section id="counter-area">
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
  );
};

export default Counter;
