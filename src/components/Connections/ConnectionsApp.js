import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'

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
