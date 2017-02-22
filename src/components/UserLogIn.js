import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../actions/index'
import { bindActionCreators } from 'redux'

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
      <div className='whitebg'>
        <form onSubmit={this.handleSubmit}>
          <input ref="email" placeholder="Enter Email" /> <br/>
          <input type="password" ref="userPassword" placeholder="Enter Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({setUser}, dispatch)
}


export default connect(null, mapDispatchToProps)(UserLogIn)
