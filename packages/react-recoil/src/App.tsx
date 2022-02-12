import Wrapper from './components/Wrapper';
import ViewCounter from './components/ViewCounter';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <nav>
          <ViewCounter />
        </nav>
        <Wrapper />
      </div>
    </RecoilRoot>
  );
}

export default App;
