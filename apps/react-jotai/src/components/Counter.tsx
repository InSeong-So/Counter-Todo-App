import { useAtomValue, useSetAtom } from 'jotai';
import { writeCountAtom, readonlyCountAtom } from '../atom';

const Counter = () => {
  const count = useAtomValue(readonlyCountAtom);
  const setOperator = useSetAtom(writeCountAtom);
  const handleClick = (operation: number) => setOperator(operation);

  return (
    <section id="counter-area">
      <section id="counter-display">
        <article>
          <h1 id="counter">{count}</h1>
        </article>
      </section>
      <section id="buttons">
        <div className="grid">
          <button id="sub" onClick={() => handleClick(-1)}>
            -1
          </button>
          <button id="reset" className="contrast" onClick={() => handleClick(0)}>
            RESET
          </button>
          <button id="add" className="secondary" onClick={() => handleClick(1)}>
            +1
          </button>
        </div>
      </section>
    </section>
  );
};

export default Counter;
