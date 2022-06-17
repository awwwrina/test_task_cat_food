import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.querySelector('.main'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
