import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import Stats from 'three/addons/libs/stats.module.js';

const stats = new Stats();
const container = document.getElementById('container');
container.appendChild(stats.dom);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
