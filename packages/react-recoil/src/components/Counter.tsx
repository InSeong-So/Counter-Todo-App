import { useSetRecoilState } from 'recoil';
import { counterState } from '../recoil/count';

export const Counter = () => {
  const setCount = useSetRecoilState(counterState);

  const addCount = () => setCount(count => count + 1);
  const decreaseCount = () => setCount(count => count - 1);

  return (
    <div>
      <button onClick={decreaseCount}>Decrease (-1)</button>
      <button onClick={addCount}>Add (+1)</button>
    </div>
  );
};

export const CountMultTwo = () => {
  const setCount = useSetRecoilState(counterState);

  const addCount = () => setCount(count => count * 2);
  const decreaseCount = () => setCount(count => count / 2);

  return (
    <div>
      <button onClick={decreaseCount}>Decrease (*1)</button>
      <button onClick={addCount}>Add (/1)</button>
    </div>
  );
};
