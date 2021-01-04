import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/__PageLogin';

const AuthRouter: React.FC = () => {

  return (
    <BrowserRouter>
      <Route path='/' component={Login} />
    </BrowserRouter>
  );
}

export default AuthRouter;