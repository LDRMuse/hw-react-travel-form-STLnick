import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Form, Header, Login } from './components'

import 'bulma/css/bulma.css'
import './App.css';

export const App = () => {
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="has-text-centered">
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Form />
          </Route>
        </Switch>
      </div>
      <div className="column"></div>
    </div>
  );
}
