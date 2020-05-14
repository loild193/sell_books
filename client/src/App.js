import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
