//libraries
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

//components
import ListContact from './ListContact.js'
import FullContact from './FullContact.js'
//data
import users from './randomUser.json'

//styles
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={()=><Redirect to="/list" />} />
          <Route path="/list" component={ListContact} />
          <Route path="/detailed/:id" component={FullContact} />
        </div>
      </Router>
    )
  }
}

export default App;
