 import React, { Component } from 'react'
import { Link } from 'react-router'

export default class OptionButtons extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="Buttons">
        <Link to={`/profile/${this.props.conn.requester_commute.profile.id}`}><button>Checkout {this.props.conn.requester_commute.profile.name}'s profile!</button></Link><br/>
        <button id={this.props.id} onClick={this.props.acceptInvitation} disabled={this.props.invitationAccepted}>Accept {this.props.conn.requester_commute.profile.name}'s invitation </button><br/>
        <button id={this.props.id} onClick={this.props.declineInvitation} disabled={this.props.invitationDeclined}>Decline {this.props.conn.requester_commute.profile.name}'s invitation </button>
      </div>
    )
  }
}
