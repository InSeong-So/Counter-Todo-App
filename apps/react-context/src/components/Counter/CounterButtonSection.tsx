type CounterButtonSectionProps = {
  addHandler: () => void;
  resetHandler: () => void;
  subtractHandler: () => void;
};

const CounterButtonSection = ({ addHandler, resetHandler, subtractHandler }: CounterButtonSectionProps) => (
  <section id="buttons">
    <div className="grid">
      <button id="sub" onClick={subtractHandler}>
        -1
      </button>
      <button id="reset" onClick={resetHandler} className="contrast">
        RESET
      </button>
      <button id="add" onClick={addHandler} className="secondary">
        +1
      </button>
    </div>
  </section>
);

export default CounterButtonSection;
