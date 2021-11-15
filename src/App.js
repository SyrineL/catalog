import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Descri from './components/Descri';
import Film from './components/Film';
import NotFound from './components/NotFound'
import catalogue from './catalogue.json'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Film} />
          <Route path="/descri/:id" component={Descri} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;