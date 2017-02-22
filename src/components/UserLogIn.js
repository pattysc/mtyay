import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../actions/index'
import { bindActionCreators } from 'redux'
import { Button, Row, Col } from 'react-materialize'

class UserLogIn extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const user = {
      email: this.refs.email.value,
      password: this.refs.userPassword.value,
    }
    this.props.setUser(user)
  }

  render(){
    return(
      <div>
        <Row className='whitebg'>
          <Col s={12} m={12} l={12} >
              <h3> Login </h3>
          </Col>
        </Row>
        <Row className='whitebg'>
          <Col s={12} m={12} l={12} >
            <form onSubmit={this.handleSubmit}>
              <input ref="email" placeholder="Enter Email" /> <br/>
              <input type="password" ref="userPassword" placeholder="Enter Password" />
              <Button className='btn amber darken-4' type="submit">Submit</Button>
            </form>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({setUser}, dispatch)
}


export default connect(null, mapDispatchToProps)(UserLogIn)
