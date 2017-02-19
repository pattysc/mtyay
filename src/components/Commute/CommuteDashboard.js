import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import {fetchCommutes, fetchCommuteMatches} from '../../actions'

class CommuteDashboard extends Component {
  componentDidMount(){
    this.props.fetchCommutes()
  }

  addCommute(){
    browserHistory.push('/commute/new')
  }

  showMatches(){
    browserHistory.push('/commute/matches')
  }

  // Find a match for one specific commute
  findMatch(event){
    browserHistory.push(`/commute/${event.target.value}`)
  }

  render(){
    return(
      // {this.state.stations.map( (station, i) => {return <option value={station.id} key={i}>{station.name} </option>} )}

      <div>
        <br/><button onClick={this.addCommute.bind(this)}>Add a Commute</button><br/><br/>
        <button  onClick={this.showMatches.bind(this)}>Show All Matches</button><br/>

        <h1> Your Commutes </h1>

        {this.props.commutes.map( (commute, i) => {
          return (
          <div>
          <h3>Nickname:{commute.nickname}</h3>
            <p>Origin Station: {commute.origin.name}, {commute.origin.line} train <br/>
            Destination Station: {commute.destination.name}, {commute.origin.line} train<br/>
            Time: {commute.time}<br/></p>
          <button value={commute.id} onClick={this.findMatch.bind(this)}>Find A Match</button>
            <hr/><br/>
          </div>
            )}
        )}
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchCommutes, fetchCommuteMatches}, dispatch)
}

function mapStateToProps(state){
  return {
    commutes: state.commutes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommuteDashboard)
