import React from 'react';
// React 18
import ReactDOM from 'react-dom/client';
// React 17
// import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';

// React 17
// ReactDOM.render(<App />, document.getElementById('root'));
// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
