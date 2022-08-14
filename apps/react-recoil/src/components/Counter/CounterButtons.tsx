import { Button } from '../shared';

const CounterButtons = () => {
  return (
    <section id="buttons">
      <div className="grid">
        <Button id="sub">-1</Button>
        <Button id="reset" className="contrast">
          RESET
        </Button>
        <Button id="add" className="secondary">
          +1
        </Button>
      </div>
    </section>
  );
};

export default CounterButtons;
