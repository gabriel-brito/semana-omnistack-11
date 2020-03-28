import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Logon from './pages/logon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Logon}/>
      </Switch>
    </BrowserRouter>
  );
}