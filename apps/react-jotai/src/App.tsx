import { Suspense } from 'react';
import { Loading, Counter, Todo } from './components';

function App() {
  return (
    <main className="container">
      <section className="loadable">
        <Suspense fallback={<Loading />}>
          <Counter />
        </Suspense>
      </section>
      <hr />
      <section className="loadable">
        <Suspense fallback={<Loading />}>
          <Todo />
        </Suspense>
      </section>
    </main>
  );
}

export default App;
