import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'

class ConnectionsApp extends Component {

  handleLogOut(){
    sessionStorage.clear()
    browserHistory.push('/')
  }

  render(){
    return(
      <div className="Profile">
        <button onClick={this.handleLogOut.bind(this)}>Log Out</button><br/>
        <Link to={'/connections/requests'}><button>Show Requests</button></Link><br/>
        <Link to={'/connections'}><button>Show Connections</button></Link><br/>
        { this.props.children }
      </div>
    )
  }
}

export default ConnectionsApp
