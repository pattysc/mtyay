 import React, { Component } from 'react'
import { Link } from 'react-router'

export default function OptionButtons(props){
  return(
    <div className="Buttons">
      <Link to={`/profile/${props.conn.requester_commute.profile.id}`}><button>Checkout {props.conn.requester_commute.profile.name}'s profile!</button></Link><br/>
      <button id={props.id} onClick={props.acceptInvitation} disabled={props.invitationAccepted}>Accept {props.conn.requester_commute.profile.name}'s invitation </button><br/>
      <button id={props.id} onClick={props.declineInvitation} disabled={props.invitationDeclined}>Decline {props.conn.requester_commute.profile.name}'s invitation </button>
    </div>

  )
}
