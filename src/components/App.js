import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './../styles/App.css';
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
