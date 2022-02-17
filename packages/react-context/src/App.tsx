import * as Styled from '@project/ui/src/react';
import { useContext } from 'react';
import { CountContext } from './context';

const ids = [
  { button: 'increment', icon: 'fa fa-plus' },
  { button: 'decrement', icon: 'fa fa-minus' },
  { button: 'reset', icon: 'fa fa-refresh' },
];

function App() {
  const { count, add, subtract, reset } = useContext(CountContext);

  const eventType: Record<string, () => void> = {
    'increment-button': add,
    'decrement-button': subtract,
    'reset-button': reset,
    'increment-button-async': add,
    'decrement-button-async': subtract,
    'reset-button-async': reset,
  };

  const handleSyncClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const type = target.tagName === 'I' ? (target.parentElement as HTMLElement).id : target.id;

    eventType[type]();
  };

  const handleAsyncClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const type = target.tagName === 'I' ? (target.parentElement as HTMLElement).id : target.id;

    setTimeout(() => {
      eventType[type]();
    }, 1000);
  };

  return (
    <Styled.Counter>
      <Styled.CounterDisplay>{count}</Styled.CounterDisplay>
      <Styled.CounterTypeTitle>Sync</Styled.CounterTypeTitle>
      <Styled.CounterButtons>
        {ids.map(({ button, icon }, index) => (
          <Styled.Button id={`${button}-button`} key={index} onClick={handleSyncClick}>
            <i className={icon}></i>
          </Styled.Button>
        ))}
      </Styled.CounterButtons>
      <Styled.CounterTypeTitle>Async</Styled.CounterTypeTitle>
      <Styled.CounterButtons>
        {ids.map(({ button, icon }, index) => (
          <Styled.Button id={`${button}-button-async`} key={index} onClick={handleAsyncClick}>
            <i className={icon}></i>
          </Styled.Button>
        ))}
      </Styled.CounterButtons>
    </Styled.Counter>
  );
}

export default App;
