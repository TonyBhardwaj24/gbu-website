 // src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
        <AuthProvider>
    <App /></AuthProvider>
  </Router>
  </React.StrictMode>
);
