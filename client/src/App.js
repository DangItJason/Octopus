
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/home' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;


