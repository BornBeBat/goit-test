import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components';
import './fonts/Montserrat-Medium.ttf';
import './fonts/Montserrat-SemiBold.ttf';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
