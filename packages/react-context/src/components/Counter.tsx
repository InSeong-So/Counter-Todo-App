import * as Styled from '@project/ui/src/react';
import { CounterProps } from 'counter';

const Counter = ({ ids, isAsync, handleClick }: CounterProps) => {
  return (
    <>
      <Styled.CounterTypeTitle>{isAsync ? 'Async' : 'Sync'}</Styled.CounterTypeTitle>
      <Styled.CounterButtons>
        {ids.map(({ button, icon }, index) => (
          <Styled.Button
            id={`${button}-button${isAsync ? '-async' : ''}`}
            key={index}
            onClick={handleClick}
          >
            <i className={icon}></i>
          </Styled.Button>
        ))}
      </Styled.CounterButtons>
    </>
  );
};

export default Counter;
