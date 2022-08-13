import Todo from './components/Todo';
import Counter from './components/Counter';
import { useMemo, useState } from 'react';
import { TodoContext, CounterContext } from './contexts';

const App = () => {
  const [todos, setTodos] = useState([{ id: '0', title: '테스트', completed: false }]);
  const todosValue = useMemo(() => ({ todos, setTodos }), [todos]);
  const [count, setCount] = useState(0);
  const countValue = useMemo(() => ({ count, setCount }), [count]);

  return (
    <main className="container">
      <CounterContext.Provider value={countValue}>
        <Counter />
      </CounterContext.Provider>
      <hr />
      <TodoContext.Provider value={todosValue}>
        <Todo />
      </TodoContext.Provider>
    </main>
  );
};

export default App;
