import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Row, Col } from 'react-materialize'
import { setUser, createUser } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class MainPage extends Component {

  constructor(){
    super()
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)

    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
  }

  handleLoginSubmit(event){
    event.preventDefault()
    const user = {
      email: this.refs.email_login.value,
      password: this.refs.userPassword_login.value,
    }
    this.props.setUser(user)
  }

  handleSignupSubmit(event){
    event.preventDefault()
    const user = {
      email: this.refs.email_signup.value,
      password: this.refs.userPassword_signup.value,
      password_confirmation: this.refs.passwordConfirmation_signup.value
    }
    this.props.createUser(user)
  }


  render(){
    return(
      <div className="Page" id="landing-page">
        <Row className='whitebg'>
          <Col s={12} m={12} l={12} className='whitebg center'>
              <h2> Meet cool people who share your commutes</h2>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={5} l={5} offset='m1 l1' className='whitebg center' style={{marginRight: '6%'}}>
            <h4> <b>Sign Up</b> </h4>
            <div className='whitebg'>
              <form onSubmit={this.handleSignupSubmit}>
                <input ref="email_signup" placeholder="Enter Email" />
                <input type="password" ref="userPassword_signup" placeholder="Enter Password" />
                <input type="password" ref="passwordConfirmation_signup" placeholder="Verify Password" />
                <Button className='deep-orange darken-3' type="submit">Sign Up</Button>
              </form>
            </div>
          </Col>
          <Col s={10} m={5} l={5} offset='s1' className='whitebg center'>
            <ul><br/>
              <li> <h5> <b>🚂</b> Add your commutes and discover matches</h5></li><br/>
              <li> <h5> <b>🔎</b> Read profiles and request connections </h5></li><br/>
              <li> <h5> <b>🎉</b> Meet new people & make your commutes awesome! </h5></li><br/>
            </ul>
          </Col>
        </Row>
        <Row >

          <Col s={8} m={8} l={8} offset='s2 m2 l2'className='whitebg  center'>
              <h4><b>Login</b> </h4>
              <div className='whitebg'>
                <form onSubmit={this.handleLoginSubmit}>
                  <input ref="email_login" placeholder="Enter Email" /> <br/>
                  <input type="password" ref="userPassword_login" placeholder="Enter Password" />
                  <Button className='deep-orange darken-3' type="submit">Login</Button>
                </form>
              </div>
          </Col>
        </Row>
      </div>

    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({setUser, createUser}, dispatch)
}


export default connect(null, mapDispatchToProps)(MainPage)
