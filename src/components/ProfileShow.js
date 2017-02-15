import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileShow extends Component {
  render(){
    return(
      <div>
        <div>Name:{this.props.profile.name}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(ProfileShow)
