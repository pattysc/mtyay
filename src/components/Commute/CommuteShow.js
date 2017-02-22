import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchMatches, fetchCommuteMatches,
        createConnection, fetchCommutes, setCurrentCommute, toggleMatchButton} from '../../actions'
import  { Row, Input} from 'react-materialize'
import { Link } from 'react-router'


import MatchConnectButton from './MatchConnectButton'
import MatchInfoTile from './MatchInfoTile'

// Route -> commute/:id
class CommuteShow extends Component {

  componentDidMount(){
    this.props.fetchCommutes()
    this.props.fetchCommuteMatches(this.props.params.id)

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
    this.props.createConnection({ requester_commute_id, requestee_commute_id, invite_note})
  }

  render(){
    console.log(this.props.matches)
    // const rootCommute = this.shownCommute()
    if (Object.keys(this.props.currentCommute).length === 0) {
      return(
        <div className='whitebg'> Loading... ...! </div>
        )
    } else if (this.props.matches.length === 0){
      return (<div className='whitebg'>You have no matches :( </div>)
    } else {
      return(

      <div>
        <div className="yourCommute whitebg">
          <h2>Your Commute:</h2>
            <h5><b>Nickname</b>: { this.props.currentCommute.nickname } <br/>
            <b>From</b>: { this.props.currentCommute.origin.name }&nbsp;on the <b>{ this.props.currentCommute.origin.line }</b> train <br/>
            <b>Departing Around:</b> {this.props.currentCommute.time} <br/>
            <b>Destination:</b> {this.props.currentCommute.destination.name} <br/></h5>

        </div>
        <div className='whitebg'>
          <h2> Commute Matches</h2>
        </div>
          {this.props.matches.map((match, i) => {
          if (!match.button.clicked){
            return (
            <div className='whitebg'key={`div--fullMatchTile-${i}`}>
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
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchMatches, fetchCommuteMatches,
    createConnection, fetchCommutes, setCurrentCommute, toggleMatchButton}, dispatch)
}

function mapStateToProps(state, ownProps){
  const id = parseInt(ownProps.params.id, 10)
  console.log('hit map state to props')
  let foundCommute = {}
  if (state.commutes.length > 0) {
      foundCommute = state.commutes.find( (commute) => { return commute.id === id })
  }
  return {
    matches: state.matches,
    commutes: state.commutes,
    currentCommute: foundCommute
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommuteShow)
