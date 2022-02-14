import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from '@emotion/react';
import { reset } from '@project/ui/src/react';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
