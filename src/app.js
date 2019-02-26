import React, { Component } from "react";
import { Router, Route, Switch} from "react-router-dom";
import { createMemoryHistory } from "history";
import { Header, Footer } from "./components";
import { Home } from "./containers";

// import "bootstrap/dist/css/bootstrap.min.css";

const history = createMemoryHistory();
// const themeConfig = window.__PRELOADED_STATE__;

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;