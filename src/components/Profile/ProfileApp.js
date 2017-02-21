import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class ProfileApp extends Component {

  render(){
    return(
      <div className="Profile">
        { this.props.children }
      </div>
    )
  }
}

export default ProfileApp
