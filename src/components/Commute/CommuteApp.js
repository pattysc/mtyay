import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class CommuteApp extends Component {

  render(){
    return(
      <div className="Commute">
        { this.props.children }
      </div>

    )
  }
}

export default CommuteApp
