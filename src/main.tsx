import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { SWRConfig } from 'swr';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import { ErrorFallback } from './components/ErrorFallback';
import { fetcher } from './utils/fetcher';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <React.StrictMode>
        <SWRConfig value={{ fetcher }}>
          <App />
        </SWRConfig>
      </React.StrictMode>
    </ErrorBoundary>
  </React.StrictMode>
);
