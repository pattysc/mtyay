import React, { Component } from 'react'
import { connect } from 'react-redux'
import { patchProfile } from '../../actions/index'
import { bindActionCreators } from 'redux'
import {Button} from 'react-materialize'

class ProfileCreate extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const profile = {
      name: this.refs.name.value,
      bio: this.refs.bio.value,
      phone: this.refs.phone.value,
      twitter: this.refs.twitter.value,
      linkedin: this.refs.linkedin.value,
      facebook: this.refs.facebook.value,
      instagram: this.refs.instagram.value,
      goodreads: this.refs.goodreads.value,
      skype: this.refs.skype.value
    }
    this.props.patchProfile(profile, parseInt(sessionStorage.id))
  }

  render(){
    return(
      <div className='whitebg'>
        <form onSubmit={this.handleSubmit}>
          <h3> Your Public Info </h3>
            <input type="text" ref="name" placeholder="Enter Name " required/><br/>
            <input type="text" ref="bio" placeholder="Your Short Bio" required/><br/>
          <h4>Social Media</h4>
            <input type="text" ref="twitter" placeholder="Twitter Handle"/><br/>
            <input type="text" ref="linkedin" placeholder="LinkedIn Profile"/><br/>
            <input type="text" ref="facebook" placeholder="Facebook Username"/><br/>
            <input type="text" ref="instagram" placeholder="Instagram Username"/><br/>
            <input type="text" ref="goodreads" placeholder="Goodreads Name"/><br/>
          <h3> Info for Connections Only</h3>
            <input type="tel" ref="phone" placeholder="Mobile Number" required/><br/>
            <input type="text" ref="skype" placeholder="Skype Username"/><br/>
          <Button className='btn deep-orange darken-3' type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({patchProfile}, dispatch)
}

function mapStateToProps(state){

  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCreate)
