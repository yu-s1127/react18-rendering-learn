import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { SWRConfig } from 'swr';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import { ErrorFallback } from './components/ErrorFallback';
import { fetcher } from './utils/fetcher';
import { Loading } from './components/Loading';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loading />}>
        <React.StrictMode>
          <SWRConfig value={{ fetcher, suspense: true }}>
            <App />
          </SWRConfig>
        </React.StrictMode>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
