import * as Styled from '@project/ui/src/react';
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
  reset,
  resetAsync,
} from './redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

const ids = [
  { button: 'increment', icon: 'fa fa-plus' },
  { button: 'decrement', icon: 'fa fa-minus' },
  { button: 'reset', icon: 'fa fa-refresh' },
];

const eventType: Record<
  string,
  () => {
    type: string;
  }
> = {
  'increment-button': increment,
  'decrement-button': decrement,
  'reset-button': reset,
  'increment-button-async': incrementAsync,
  'decrement-button-async': decrementAsync,
  'reset-button-async': resetAsync,
};

function App() {
  const count = useSelector<{ count: number }>(state => state.count);
  const dispatch = useDispatch();

  const handleSyncClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const type = target.tagName === 'I' ? (target.parentElement as HTMLElement).id : target.id;
    dispatch(eventType[type]());
  };
  const handleAsyncClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const type = target.tagName === 'I' ? (target.parentElement as HTMLElement).id : target.id;
    dispatch(eventType[type]());
  };

  return (
    <Styled.Counter>
      <Styled.CounterDisplay>{count as number}</Styled.CounterDisplay>
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
