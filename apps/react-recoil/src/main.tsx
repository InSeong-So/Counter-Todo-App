import '@picocss/pico';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import Error409 from './components/409';
import { ErrorBoundary } from './lib/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<>로딩중!</>}>
        <ErrorBoundary fallback={<Error409 />}>
          <App />
        </ErrorBoundary>
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
);
