import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to MTyAy</h2>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;