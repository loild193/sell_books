import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';

const axios = require('axios');

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000')
      .then((res) => {
        if (res.data.message)
          this.setState({
            redirect: true
          })
      });
  }

  render() {
    const { redirect } = this.state;

    return (
      <div className="App">
        <Navbar />
        <Router>
          {
            redirect === true ? <Redirect to="/login/" /> : <Redirect to="/" />
          }
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
