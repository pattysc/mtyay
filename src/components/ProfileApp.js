import React, { Component } from 'react'

class ProfileApp extends Component {

  render(){
    return(
      <div className="Profile">
        This is *your* profile.
        { this.props.children }
      </div>

    )
  }
}

export default ProfileApp
