import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'

class ConnectionsApp extends Component {

  render(){
    return(
      <div className="Profile">
        <Link to={'/connections/requests'}><button>Show Requests</button></Link><br/>
        <Link to={'/connections'}><button>Show Connections</button></Link><br/>
        { this.props.children }
      </div>
    )
  }
}

export default ConnectionsApp
