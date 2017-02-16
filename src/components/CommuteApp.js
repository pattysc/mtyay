import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class CommuteApp extends Component {

  handleLogOut(){
    sessionStorage.clear()
    browserHistory.push('/')
  }

  render(){
    return(
      <div className="Commute">
        <button value="Log Out" onClick={this.handleLogOut.bind(this)}>Log Out</button><br/>
        { this.props.children }
      </div>

    )
  }
}

export default CommuteApp
