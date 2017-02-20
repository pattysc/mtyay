import React, { Component } from 'react'
import { fetchConnections } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import axios from 'axios'
import OptionButtons from './OptionButtons'

class ConnectionsIndex extends Component {

  componentDidMount(){
    this.props.fetchConnections()
  }

  render(){
    console.log(this.props.connections);
    let connections
    connections = this.props.connections.map( (conn) => {
              return ( <div>
                  <p> Request from <b> {conn.requester_commute.profile.id === parseInt(sessionStorage.id) ?  "you":conn.requester_commute.profile.name } </b> to <b> {conn.requestee_commute.profile.id === parseInt(sessionStorage.id) ?  "you":conn.requestee_commute.profile.name } </b> <br/>
                      "{conn.invite_note}" <br/>
                      You guys can meet at {conn.requester_commute.origin.name} station at {conn.requestee_commute.time}!
                  </p>
                  <hr/>
                </div>
              )
      })

    return(
      <div className="Connections">
        <h2> These are your connections: </h2>
        {connections}
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
