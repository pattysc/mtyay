import React, { Component } from 'react'
import { fetchRequests } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import axios from 'axios'
import OptionButtons from './OptionButtons'

class ConnectionsRequests extends Component {

  constructor(){
    super()
    this.state = {
      invitationAccepted: false,
      invitationDeclined: false
    }
  }

  componentDidMount(){
    this.props.fetchRequests()
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
    console.log(this.props.requests);
    let requesters;
    let requestees;
    requesters = this.props.requests.map( (conn, i) => {
      if(parseInt(sessionStorage.id) === conn.requestee_commute.profile.id){
        return ( <div>
                  <p> Request from: {conn.requester_commute.profile.name} <br/>
                      Message: "{conn.invite_note}"
                  </p>
                  <OptionButtons id={i} conn={conn} invitationAccepted={this.state.invitationAccepted} invitationDeclined={this.state.invitationDeclined} acceptInvitation={this.acceptInvitation.bind(this, conn.id)} declineInvitation={this.declineInvitation.bind(this, conn.id)}/>
                  <hr/>
                </div>
              )
      }})

    requestees = this.props.requests.map( (conn) => {
      if(parseInt(sessionStorage.id) === conn.requester_commute.profile.id){
        return (
          <div>
            <p> Request to: {conn.requestee_commute.profile.name} <br/>
                      Message: "{conn.invite_note}"
            </p>
            <Link to={`profile/${conn.requestee_commute.profile.id}`}><button> Checkout {conn.requestee_commute.profile.name}'s profile! </button></Link>
            <hr/>
          </div>
              )
      }})
    return(
      <div className="requests">
        <div className="requesters">
          <h2> Other commuters have sent you these requests: </h2>
          {requesters}
        </div>
        <div className="requestees">
          <h2> You have sent out these requests: </h2>
          {requestees}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchRequests}, dispatch)
}

function mapStateToProps(state){
  return {
    requests: state.requests,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionsRequests)
