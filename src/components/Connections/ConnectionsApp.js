import React, { Component } from 'react'

class ConnectionsApp extends Component {

  render(){
    return(
      <div className="Profile">
        { this.props.children }
      </div>
    )
  }
}

export default ConnectionsApp
