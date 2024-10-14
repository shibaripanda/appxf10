import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{width: window.innerWidth, height: window.innerHeight}}>
    <App />
  </div>
);

