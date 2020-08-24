import React from 'react';

import { Form, Header } from './components'

import 'bulma/css/bulma.css'
import './App.css';

export const App = () => {
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="has-text-centered">
        <Header />
        <Form />
      </div>
      <div className="column"></div>
    </div>
  );
}
