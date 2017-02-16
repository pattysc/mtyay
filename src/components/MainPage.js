import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class MainPage extends Component {
  handleLogIn(){
    browserHistory.push('/login')
  }

  handleSignUp(){
    browserHistory.push('/signup')
  }

  render(){
    return(
      <div className="Page">
        <div> Why ride this train alone when you can go with a *new* connection? MTYAY! </div> <br/>
        <h3> Sign up or log in to get started! </h3>
        <button value="Meet your matches" onClick={this.handleSignUp.bind(this)}>Sign Up</button><br/>
        <button value="Add a commute" onClick={this.handleLogIn.bind(this)}>Log In</button>
      </div>

    )
  }
}

export default MainPage
