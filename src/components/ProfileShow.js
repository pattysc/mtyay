import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class ProfileShow extends Component {
  addCommute(){
    browserHistory.push('/commute/new')
  }

  showMatches(){
    browserHistory.push('/commute/matches')
  }

  render(){
    return(
      <div>
        <div>Name:{this.props.profile.name}</div>

        <button value="Add a commute" onClick={this.addCommute.bind(this)}>Add a Commute</button><br/>
        <button value="Meet your matches" onClick={this.showMatches.bind(this)}>Show Matches</button><br/>

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(ProfileShow)
