import React, { Component } from 'react'
import { fetchRequests } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import OptionButtons from './OptionButtons'
import { CollapsibleItem, Collapsible } from 'react-materialize';

class ConnectionsRequests extends Component {

  componentDidMount(){
    this.props.fetchRequests()
  }

  render(){
    let requesters;
    let requestees;
    requesters = this.props.requests.map( (conn, i) => {
      if(parseInt(sessionStorage.id) === conn.requestee_commute.profile.id){
        return ( <div>
                  <CollapsibleItem icon="account_circle" className="grey lighten-4 black-text" header={`From: ${conn.requester_commute.profile.name}`}>
                    Message: "{conn.invite_note}" <br/>
                    <OptionButtons conn_id={conn.id} conn={conn} />
                  </CollapsibleItem>
                </div>
              )
      }})

    requestees = this.props.requests.map( (conn) => {
      if(parseInt(sessionStorage.id) === conn.requester_commute.profile.id){
        return (
          <div>
            <CollapsibleItem icon="account_circle" className="grey lighten-4 black-text" header={`To: ${conn.requestee_commute.profile.name}`}>
              Message: "{conn.invite_note}"  <br/>
              <Link to={`/profile/${conn.requestee_commute.profile.id}`}><button> Checkout {conn.requestee_commute.profile.name}'s profile! </button></Link>
            </CollapsibleItem>
          </div>
          )
      }})
    return(
      <div className="requests">
        <div className="requesters">
          <h4> Other commuters have sent you these requests: </h4>
          <Collapsible popout>
            {requesters}
          </Collapsible>
        </div>
        <div className="requestees">
          <h4> You have sent out these requests: </h4>
          <Collapsible popout>
            {requestees}
          </Collapsible>
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
