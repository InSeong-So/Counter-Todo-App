import * as Styled from '@project/ui/src/react';
import { CountContext } from 'context';
import { useContext } from 'react';

const CounterDisplay = () => {
  const { count } = useContext(CountContext);

  return <Styled.CounterDisplay>{count}</Styled.CounterDisplay>;
};

export default CounterDisplay;
