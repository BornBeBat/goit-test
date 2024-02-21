import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components';
import './fonts/Montserrat-Medium.ttf';
import './fonts/Montserrat-SemiBold.ttf';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-test">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
