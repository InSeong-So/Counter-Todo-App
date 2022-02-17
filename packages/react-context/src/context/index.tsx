import { createContext, useState } from 'react';

/* eslint-disable @typescript-eslint/no-empty-function */
const CountContext = createContext({
  count: 0,
  add: () => {},
  subtract: () => {},
  reset: () => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const CountProvider = ({ children }: Props): JSX.Element => {
  const [count, setCount] = useState(0);
  const add = (): void => setCount(count + 1);
  const subtract = (): void => setCount(count - 1);
  const reset = (): void => setCount(0);
  return (
    <CountContext.Provider value={{ count, add, subtract, reset }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
