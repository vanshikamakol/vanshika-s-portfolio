import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';  // Custom styles (if any)
import App from './App';
import 'animate.css';

// This renders the App component into the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
