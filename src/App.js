import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import './App.css';
import { Navbar, NavItem } from 'react-materialize';



class App extends Component {
  loggedIn(){
    if (sessionStorage.jwt) {
      return true
    }
    return false
  }
  handleLogOut(){
    sessionStorage.clear()
    browserHistory.push('/')
  }

  render() {
    let buttons = ''
    if (this.loggedIn()){
      buttons = <div><NavItem ><Link onClick={this.handleLogOut.bind(this)}>Log Out</Link></NavItem></div>
    } else {
      buttons = (<div><NavItem ><Link to={`/login`}>Log In</Link></NavItem>
      <NavItem ><Link to={'/signup'}>Sign Up</Link></NavItem></div>)
    }
    return (
      <div className="App">
          <Navbar brand='MetroMeet' right>
            {buttons}
          </Navbar>
          <div className="container">
            { this.props.children }
          </div>
      </div>
    );
  }
}

export default App;
