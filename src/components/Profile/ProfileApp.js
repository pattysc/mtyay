import React, { Component } from 'react'

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
