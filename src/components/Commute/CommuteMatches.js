import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchCommutes, fetchMatches, fetchCommuteMatches,
  createConnection, toggleMatchButton} from '../../actions'
import MatchConnectButton from './MatchConnectButton'
import MatchInfoTile from './MatchInfoTile'



// Route -> commute/matches
class CommuteMatches extends Component {
  componentDidMount(){
    this.props.fetchCommutes()
    this.props.fetchMatches()
  }

  handleConnectClick(match_commute_id){
    // First, find the matching commute object that corresponds to the button clicked
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
    let invite_note = this.refs[`note--${match_commute_id}`].value
    // dispatch the action for hitting API and creating the connection
    this.props.createConnection({ requester_commute_id, requestee_commute_id, invite_note })
  }

  render(){

    return(
    <div>
      <div className='whitebg'>
        <h1> All Your Matches </h1>
      </div>
          {this.props.matches.map((match, i) => {
          if (!match.button.clicked){
            return (
            <div className='whitebg' key={`div--fullMatchTile-${i}`}>
              < MatchInfoTile commute={match} index={i} />
              <textarea ref={`note--${match.id}`} placeholder="Write a note to your connection!"></textarea><br/>
              < MatchConnectButton commute={match} handleConnectClick={this.handleConnectClick.bind(this, match.id)} index={i} disabled={false} />
            </div>
            )
          } else {
            return (
              <div className='whitebg' key={`div--fullMatchTile-${i}`}>
                < MatchInfoTile commute={match} index={i} />
                < MatchConnectButton commute={match} handleConnectClick={this.handleConnectClick.bind(this, match.id)} index={i} disabled={true} />
              </div>
            )
          }

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
