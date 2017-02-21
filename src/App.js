import React, { Component } from 'react';
import { Link } from 'react-router'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <nav>
            <Link to={'/'} >MetroMeet Logo Here</Link>
          </nav>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
