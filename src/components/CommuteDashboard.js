import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { browserHistory } from 'react-router'
import {fetchCommutes} from '../actions'


class CommuteDashboard extends Component {
  componentDidMount(){
    this.props.fetchCommutes()
    //THIS DOESNT WORK!!!!!!!!!!!!!!!!!!!!
  }

  addCommute(){
    browserHistory.push('/commute/new')
  }

  showMatches(){
    browserHistory.push('/commute/matches')
  }

  render(){
    return(
      // {this.state.stations.map( (station, i) => {return <option value={station.id} key={i}>{station.name} </option>} )}

      <div>
        <button value="Add a commute" onClick={this.addCommute.bind(this)}>Add a Commute</button><br/>
        <button value="Meet your matches" onClick={this.showMatches.bind(this)}>Show Matches</button><br/>

        <h1> Your Commutes </h1>

        {this.props.commutes.map( (commute, i) => {
          return (
          <div>
          <h3>Nickname:{commute.nickname}</h3>
            <p>Origin Station: {commute.origin.name}, {commute.origin.line} train <br/>
            Destination Station: {commute.destination.name}, {commute.origin.line} train<br/>
            Time: {commute.time}<br/></p>
            <hr/><br/>
          </div>
            )}
        )}
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchCommutes}, dispatch)
}

function mapStateToProps(state){
  return {
    commutes: state.commutes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommuteDashboard)
