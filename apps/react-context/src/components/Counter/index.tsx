import React from 'react';
import CounterButtonSection from './CounterButtonSection';
import CounterDisplaySection from './CounterDisplaySection';
import { CounterContext, CounterTextType } from '../../contexts';

export const Counter = () => {
  const { count, setCount } = React.useContext(CounterContext) as CounterTextType;

  const props = {
    count,
    addHandler: () => {
      setCount(count + 1);
    },
    resetHandler: () => {
      setCount(0);
    },
    subtractHandler: () => {
      setCount(count - 1);
    },
  };

  return (
    <section id="count-area">
      <CounterDisplaySection count={count} />
      <CounterButtonSection {...props} />
    </section>
  );
};

export default Counter;
