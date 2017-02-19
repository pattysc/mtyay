import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchCommutes, fetchMatches, fetchCommuteMatches,
  createConnection, toggleMatchButton} from '../../actions'

// Route -> commute/matches
class CommuteMatches extends Component {
  componentDidMount(){
    this.props.fetchCommutes()
    this.props.fetchMatches()
  }

  handleConnectClick(match_commute_id){
    // First, find the matching commute object that corresponds to the
    // button clicked
    let selectedMatchingCommute = this.props.matches.find( (match) => {
      return match.id === match_commute_id
    })

    // change button text (and maybe disable in future)
    this.props.toggleMatchButton(selectedMatchingCommute)

    // Next, go through current user's commutes in the store and
    // find the one with the matching origin station and time
    let currentUserMatchingCommute = this.props.commutes.find( (commute) => {
      return selectedMatchingCommute.origin_id === commute.origin_id
      && selectedMatchingCommute.time === commute.time
    })

    let requester_commute_id = currentUserMatchingCommute.id
    let requestee_commute_id = selectedMatchingCommute.id

    // dispatch the action for hitting API and creating the connection
    this.props.createConnection({ requester_commute_id, requestee_commute_id})
  }

  render(){

    if (this.props.matches.length > 0) {
      console.log(this.props.matches[0].text)
    }

    return(
      <div>
        <h1> All Your Matches </h1>
          {this.props.matches.map((match, i) => {
            let clicked = match.clicked
            return ( <div key={`div-${i}`}>
              <h3 key={`h3-${i}`}> Match name: {match.profile.name} </h3>
                <p key={`p-${i}`}> Bio: {match.profile.bio}<br/>
                Commute name: {match.nickname} <br/>
                on line {match.origin.line} at station {match.origin.name} <br/>
                leaving around {match.time} <br/>
                They get off at {match.destination.name} </p>

                <div>
                  <button key={`i`}
                  onClick={this.handleConnectClick.bind(this, match.id)}> {match.button.text} </button>
                </div>
              <hr/>
            </div> )
          })}
     </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchMatches, fetchCommuteMatches, fetchCommutes,
    createConnection, toggleMatchButton}, dispatch)
}

function mapStateToProps(state, ownProps){


  return {
    matches: state.matches,
    commutes: state.commutes,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommuteMatches)
