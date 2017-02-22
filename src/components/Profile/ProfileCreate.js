import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProfile } from '../../actions/index'
import { bindActionCreators } from 'redux'

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
    this.props.createProfile(profile)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3> Your Info </h3>
            <input type="text" ref="name" placeholder="Enter Name" /><br/>
            <input type="textarea" ref="bio" placeholder="Your Short Bio" /><br/>
            <input type="tel" ref="phone" placeholder="Mobile Number"/><br/>
          <h3>Social Media</h3>
            <input type="text" ref="twitter" placeholder="Twitter Handle"/><br/>
            <input type="text" ref="linkedin" placeholder="LinkedIn Profile"/><br/>
            <input type="text" ref="facebook" placeholder="Facebook Username"/><br/>
            <input type="text" ref="instagram" placeholder="Instagram Username"/><br/>
            <input type="text" ref="goodreads" placeholder="Goodreads Name"/><br/>
            <input type="text" ref="skype" placeholder="Skype Username"/><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({createProfile}, dispatch)
}

function mapStateToProps(state){

  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCreate)
