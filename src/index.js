import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'myRedux';
import { App } from 'components';

import './fonts/Montserrat-Medium.ttf';
import './fonts/Montserrat-SemiBold.ttf';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename="/goit-test">
      <App />
    </BrowserRouter>
  </Provider>
  //  </React.StrictMode>
);
