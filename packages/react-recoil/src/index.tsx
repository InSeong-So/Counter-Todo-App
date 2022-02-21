import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import { Global } from '@emotion/react';
import { reset } from '@project/ui/src/react';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
