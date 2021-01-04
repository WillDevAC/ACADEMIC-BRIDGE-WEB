import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from './context/contextAuth';
import ProviderMain from './context/contextMain';
import { ToastProvider } from 'react-toast-notifications';
ReactDOM.render(
  <ProviderMain>
    <Provider>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={4000}
        placement="top-right">
        <App/>
      </ToastProvider>
    </Provider>
  </ProviderMain>,
  document.getElementById('root')
);


