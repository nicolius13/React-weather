import React from 'react';
import ReactDOM from 'react-dom';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import App from './App';
import { TempTypeContextProvider } from './store/tempContext';

ReactDOM.render(
  <React.StrictMode>
    <TempTypeContextProvider>
      <App />
    </TempTypeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
