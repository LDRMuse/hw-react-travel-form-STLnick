import React from 'react';

import { Form } from './components'

import 'bulma/css/bulma.css'
import './App.css';

export const App = () => {
  return (
    <div className="columns">
      <div className="column"></div>
      <Form />
      <div className="column"></div>
    </div>
  );
}
