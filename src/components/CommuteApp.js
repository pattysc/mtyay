import React, { Component } from 'react'

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
