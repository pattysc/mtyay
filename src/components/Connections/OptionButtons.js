import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

export default class OptionButtons extends Component{
  constructor(props){
    super(props)
    this.state = {
      invitationAccepted: false,
      invitationDeclined: false
    }
  }

  acceptInvitation(conn_id){
    let params
    params = { id: conn_id, accepted: true}
    axios.patch(`/connections/${conn_id}`, params)
    this.setState({
      invitationAccepted: true,
      invitationDeclined: false
    })
  }

  declineInvitation(conn_id){
    let params
    params = { id: conn_id, denied: true}
    axios.patch(`/connections/${conn_id}`, params)
    this.setState({
      invitationAccepted: false,
      invitationDeclined: true
    })
  }

  render(){
    return(
      <div className="Buttons">
        <Link to={`/profile/${this.props.conn.requester_commute.profile.id}`}><button>Checkout {this.props.conn.requester_commute.profile.name}'s profile!</button></Link><br/>
        <button id={this.props.id} onClick={this.acceptInvitation.bind(this, this.props.conn_id)} disabled={this.state.invitationAccepted}>Accept {this.props.conn.requester_commute.profile.name}'s invitation </button><br/>
        <button id={this.props.id} onClick={this.declineInvitation.bind(this, this.props.conn_id)} disabled={this.state.invitationDeclined}>Decline {this.props.conn.requester_commute.profile.name}'s invitation </button>
      </div>
    )
  }
}
