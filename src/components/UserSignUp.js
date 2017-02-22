import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/index'
import { bindActionCreators } from 'redux'
import { Row, Col } from 'react-materialize'

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
        <Row className='whitebg'>
          <Col s={12} m={12} l={12} >
            <h3> Sign Up </h3>
          </Col>
        </Row>
        <div className='whitebg'>
          <form onSubmit={this.handleSubmit}>
            <input ref="email" placeholder="Enter Email" />
            <input type="password" ref="userPassword" placeholder="Enter Password" />
            <input type="password" ref="passwordConfirmation" placeholder="Verify Password" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({createUser}, dispatch)
}


export default connect(null, mapDispatchToProps)(UserSignUp)
