import React from 'react';
import ReactDOM from 'react-dom/client';

// --- Importaciones de Bootstrap ---
// 1. CSS Principal de Bootstrap (ya lo tenías)
import 'bootstrap/dist/css/bootstrap.min.css';
// 2. AÑADE AHORA: CSS de Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// 3. AÑADE AHORA: TODO el JavaScript de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);