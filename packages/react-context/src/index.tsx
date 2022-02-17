import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from '@emotion/react';
import { reset } from '@project/ui/src/react';
import { CountProvider } from 'context';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
