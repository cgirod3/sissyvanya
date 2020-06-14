import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import About from './About.js';
import Home from './Home.js';

import '../styles/containers/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={ Home } exact />
        <Route path='/about' component={ About } />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
