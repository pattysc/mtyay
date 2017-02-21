import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button } from 'react-materialize'

class MainPage extends Component {

  render(){
    return(
      <div className="Page" id="landing-page">
        <h2> Why ride this train alone when you can go with a *new* connection? MTYAY! </h2> <br/>
        <h3> Sign up or log in to get started! </h3>
      </div>

    )
  }
}

export default MainPage
