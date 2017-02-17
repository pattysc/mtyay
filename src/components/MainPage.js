import React, { Component } from 'react'
import { Link } from 'react-router'

class MainPage extends Component {

  render(){
    return(
      <div className="Page">
        <div> Why ride this train alone when you can go with a *new* connection? MTYAY! </div> <br/>
        <h3> Sign up or log in to get started! </h3>
        <Link to={'/login'}><button>Log In</button></Link><br/>
        <Link to={'/signup'}><button>Sign Up</button></Link>
      </div>

    )
  }
}

export default MainPage
