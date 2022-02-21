import * as Styled from '@project/ui/src/react';
import { Suspense } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { asyncCounterSelector, counterState } from 'recoil/count';

const ids = [
  { button: 'increment', icon: 'fa fa-plus' },
  { button: 'decrement', icon: 'fa fa-minus' },
  { button: 'reset', icon: 'fa fa-refresh' },
];

function App() {
  const [count, setCount] = useRecoilState<number>(counterState);
  const setAsyncCount = useSetRecoilState<number>(asyncCounterSelector);

  const eventType: Record<string, () => void> = {
    'increment-button': () => setCount(count => count + 1),
    'decrement-button': () => setCount(count => count - 1),
    'reset-button': () => setCount(0),
    'increment-button-async': () => setAsyncCount(count => count + 1),
    'decrement-button-async': () => setAsyncCount(count => count - 1),
    'reset-button-async': () => setAsyncCount(0),
  };

  const handleSyncClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const type = target.tagName === 'I' ? (target.parentElement as HTMLElement).id : target.id;

    eventType[type]();
  };

  const handleAsyncClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const type = target.tagName === 'I' ? (target.parentElement as HTMLElement).id : target.id;

    eventType[type]();
  };

  const Fallback = () => {
    return (
      <div id="load">
        <span>Loading...</span>
      </div>
    );
  };

  return (
    <Styled.Counter>
      <Suspense fallback={<Fallback />}>
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
      </Suspense>
    </Styled.Counter>
  );
}

export default App;
