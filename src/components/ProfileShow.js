import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/index'
import { bindActionCreators } from 'redux'

class ProfileShow extends Component {
  debugger;
  render(){
    console.log(this.props.profile);
    return(
      <div>
        <div>Name: <span>{this.props.profile.name}</span></div>
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
