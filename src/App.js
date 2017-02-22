import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import './App.css';
import { Navbar, NavItem, Button, Footer } from 'react-materialize';



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
      buttons =
      <div>
        <NavItem ><Link onClick={this.handleLogOut.bind(this)}>Log Out</Link></NavItem>
        <NavItem ><Link to={`/profile/${sessionStorage.id}`}>My Profile</Link></NavItem>
        <NavItem ><Link to={`/commute`}>My Commutes</Link></NavItem>
        <NavItem ><Link to={`/commute/matches`}>My Matches</Link></NavItem>
        <NavItem ><Link to={`/connections`}>My Connections</Link></NavItem>
        <NavItem ><Link to={`/connections/requests`}>My Requests</Link></NavItem>
      </div>
    } else {
      buttons = (<div><NavItem ><Link to={`/login`}>Log In</Link></NavItem>
      <NavItem ><Button><Link to={'/signup'}>Sign Up</Link></Button></NavItem></div>)
    }
    return (
      <div className="App" id='mainbg'>
        <div className="nav-wrapper">
          <Navbar href={`/commute/matches`} brand={<img className="responsive-img" id="logo" src="/transparent_wide_edit.png"/>} right>
            {buttons}
          </Navbar>
        </div>
          <div className="container">
            { this.props.children }
          </div>
          <Footer copyrights="&copy; 2017 MetroMeetups">
          </Footer>
      </div>
    );
  }
}

export default App;
