import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { foo, asyncFoo, asyncFooFail } from './actions/foo'

class App extends Component {
  render() {
    const {foo, asyncFoo, asyncFooFail } = this.props
    foo();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          <button onClick={() => asyncFoo()}>Click</button> to trigger action `asyncFoo()`
        </p>
        <p className="App-intro">
          <button onClick={() => asyncFooFail()}>Click</button> to trigger action `asyncFooFail()`
        </p>
      </div>
    );
  }
}

export default connect(null, {foo, asyncFoo, asyncFooFail})(App);
