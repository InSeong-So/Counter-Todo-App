import { useSetRecoilState } from 'recoil';
import { charCounterState } from '../../recoil/counter/atom';
import { Button } from '../shared';

const CounterButtons = () => {
  const setAddCounter = useSetRecoilState(charCounterState);
  const handleClick = (target: number) => setAddCounter(target);
  return (
    <section id="buttons">
      <div className="grid">
        <Button id="sub" onClick={() => handleClick(-1)}>
          -1
        </Button>
        <Button id="reset" className="contrast" onClick={() => handleClick(0)}>
          RESET
        </Button>
        <Button id="add" className="secondary" onClick={() => handleClick(1)}>
          +1
        </Button>
      </div>
    </section>
  );
};

export default CounterButtons;
