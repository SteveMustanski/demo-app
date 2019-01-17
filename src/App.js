import React, { Component } from 'react';
import './App.css';
import {Jumbotron} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Jumbotron className="bg-info">
        <h1>Checkout the reactstrap jumbotron!</h1>
        <p className="lead">Just a simple jumbotron to start things off.</p>
      </Jumbotron>

      </div>
    );
  }
}

export default App;
