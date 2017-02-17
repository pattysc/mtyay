import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchMatches, fetchCommuteMatches} from '../../actions'

// Route -> commute/matches
class CommuteMatches extends Component {
  componentDidMount(){
    this.props.fetchMatches()
    this.props.fetchCommuteMatches(parseInt(this.props.params.id, 10))
  }

  handleConnectClick(event){
    // this is for initiating the Connect request
    // Create a new action and object
    console.log(event)
  }

  render(){
    console.log(this.props.matches);
    return(
      <div>
        <h1> these are your matches </h1>
          {this.props.matches.map((match, i) => {
            return ( <div>
              <h3> Match name: {match.profile.name} </h3>
                <p> Bio: {match.profile.bio} </p>
                Commute name: {match.nickname} <br/>
                at station {match.origin.name} <br/>
                on line {match.origin.line} <br/>
                at {match.time} <br/>
                They will get off at {match.destination.name} <br/>
              <button key={i} onClick={this.handleConnectClick.bind(this)} > Connect MTYAY </button> <hr/>
            </div> )
          })}
     </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchMatches, fetchCommuteMatches}, dispatch)
}

function mapStateToProps(state, ownProps){
  return {
    matches: state.matches
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommuteMatches)
