import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/index'
import { bindActionCreators } from 'redux'

class UserSignUp extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const user = {
      email: this.refs.email.value,
      password: this.refs.userPassword.value,
      password_confirmation: this.refs.passwordConfirmation.value
    }
    this.props.createUser(user)
  }

  render(){
    return(
      <div>
        <div className="errors">{this.props.errors}</div>
        <form onSubmit={this.handleSubmit}>
          <input ref="email" placeholder="Enter Email" />
          <input type="password" ref="userPassword" placeholder="Enter Password" />
          <input type="password" ref="passwordConfirmation" placeholder="Verify Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({createUser}, dispatch)
}

function mapStateToProps(state){

  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp)
