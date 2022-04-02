import React from 'react';
import './styles/index.css';
import App from './App';

// Required for React v18+
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as Element | DocumentFragment;
const Root = createRoot(container);

Root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
