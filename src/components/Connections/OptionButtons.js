import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import  { Button } from 'react-materialize'

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
        <br/>
        <Link to={`/profile/${this.props.conn.requester_commute.profile.id}`}><Button id='commute-match-tile-profile' className='btn deep-orange darken-3'>Checkout {this.props.conn.requester_commute.profile.name}'s profile!</Button></Link><br/><br/>
        <Button className="btn amber darken-4" type="submit" id={this.props.id} onClick={this.acceptInvitation.bind(this, this.props.conn_id)} disabled={this.state.invitationAccepted}>Accept {this.props.conn.requester_commute.profile.name}'s invitation </Button><br/><br/>
        <Button className="btn amber darken-4" type="submit" id={this.props.id} onClick={this.declineInvitation.bind(this, this.props.conn_id)} disabled={this.state.invitationDeclined}>Decline {this.props.conn.requester_commute.profile.name}'s invitation </Button>
      </div>
    )
  }
}
