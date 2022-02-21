import * as Styled from '@project/ui/src/react';
import Counter from 'components/Counter';
import CounterDisplay from 'components/CounterDisplay';
import { CounterId } from 'counter';
import { useContext } from 'react';
import { CountContext } from './context';

const ids: CounterId[] = [
  { button: 'increment', icon: 'fa fa-plus' },
  { button: 'decrement', icon: 'fa fa-minus' },
  { button: 'reset', icon: 'fa fa-refresh' },
];

function App() {
  const { add, subtract, reset } = useContext(CountContext);

  const invoke: Record<string, () => void> = {
    'increment-button': add,
    'decrement-button': subtract,
    'reset-button': reset,
    'increment-button-async': add,
    'decrement-button-async': subtract,
    'reset-button-async': reset,
  };

  const handleClick = (event: React.MouseEvent, isAsync: undefined | boolean) => {
    const target = event.target as HTMLElement;
    const type = target.tagName === 'I' ? (target.parentElement as HTMLElement).id : target.id;
    if (isAsync === undefined) return invoke[type]();
    setTimeout(() => invoke[type](), 1000);
  };

  return (
    <Styled.Counter>
      <CounterDisplay />
      <Counter ids={ids} isAsync={false} handleClick={handleClick} />
      <Styled.CounterHr />
      <Counter ids={ids} isAsync={true} handleClick={e => handleClick(e, true)} />
    </Styled.Counter>
  );
}

export default App;
