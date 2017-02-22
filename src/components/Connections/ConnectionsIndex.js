import React, { Component } from 'react'
import { fetchConnections } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import axios from 'axios'
import OptionButtons from './OptionButtons'
import { CollapsibleItem, Collapsible } from 'react-materialize';


class ConnectionsIndex extends Component {

  componentDidMount(){
    this.props.fetchConnections()
  }

  render(){
    console.log(this.props.connections);
    let connections
    connections = this.props.connections.map( (conn) => {
      let header = conn.requester_commute.profile.id === parseInt(sessionStorage.id) ?  "you":conn.requester_commute.profile.name
      let to = conn.requestee_commute.profile.id === parseInt(sessionStorage.id) ?  "you":conn.requestee_commute.profile.name
              return ( <div>
                <CollapsibleItem icon="account_circle" className="grey lighten-4 black-text" header={`From ${header} to ${to}`}>
                  Message: "{conn.invite_note}" <br/>
                  You guys can meet at {conn.requester_commute.origin.name} station at {conn.requestee_commute.time}!
                  <OptionButtons conn_id={conn.id} conn={conn} />
                </CollapsibleItem>
                </div>
              )
      })

    return(
      <div className="Connections">
        <h4> These are your connections: </h4>
        <Collapsible popout>
          {connections}
        </Collapsible>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchConnections}, dispatch)
}

function mapStateToProps(state){
  return {
    connections: state.connections,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionsIndex)
