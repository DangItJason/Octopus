
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/dashboard/Login';
import Signup from './components/dashboard/Signup';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/home' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;


