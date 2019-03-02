import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from "history"
import Home from "./pages/home";

const history = createMemoryHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={ (props) => <Home {...props}/> } />
        </Switch>
      </Router>
    );
  }
}