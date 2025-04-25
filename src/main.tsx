import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import SigninPage from './pages/Auth/SigninPage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth/signin" element={<SigninPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
