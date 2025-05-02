import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// normalize.css
import 'normalize.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
