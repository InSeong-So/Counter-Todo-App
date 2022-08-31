import { useRecoilValue } from 'recoil';
import { charCounterState, counterState } from '../../recoil/counter/atom';
import { getPrimeNumbers } from '../../utils';

const CounterDisplay = () => {
  const count = useRecoilValue(counterState);
  const countLength = useRecoilValue(charCounterState);

  return (
    <section id="counter-display">
      <article>
        <h1 id="counter">{count}</h1>
        <p style={{ textAlign: 'right', marginRight: '1em' }}>자릿수 {countLength || 1}</p>
        <p style={{ textAlign: 'right', marginRight: '1em' }}>소수의 수 {getPrimeNumbers(count) || 0}</p>
      </article>
    </section>
  );
};

export default CounterDisplay;
