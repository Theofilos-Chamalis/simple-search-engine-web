import React from 'react';
import './styles/index.css';
import App from './App';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container as Element | DocumentFragment);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
