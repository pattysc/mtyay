import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchMatches, fetchCommuteMatches,
        createConnection, fetchCommutes, setCurrentCommute} from '../../actions'

// Route -> commute/:id
class CommuteShow extends Component {

  componentDidMount(){
    this.props.fetchCommutes()
    console.log(this.props);
    this.props.fetchCommuteMatches(this.props.params.id)

  }

  handleConnectClick(match_commute_id){
    let requester_commute_id = parseInt(this.props.params.id, 10)
    let requestee_commute_id = match_commute_id
    // requested_at = Time.now
    // invite_note later
    this.props.createConnection({ requester_commute_id, requestee_commute_id })
  }

  render(){
    console.log(this.props.currentCommute)
    // const rootCommute = this.shownCommute()
    if (Object.keys(this.props.currentCommute).length === 0) {
      return(
        <div> Loading... ...! </div>
        )
    } else if (this.props.matches.length === 0){
      return (<div>You have no matches :( </div>)
    } else {
      return(

      <div>
        <div className="yourCommute">
          <h2>This is your commute:</h2>
            <p>Name: { this.props.currentCommute.profile.name } <br/>
            Commute name: { this.props.currentCommute.nickname } <br/>
            at station { this.props.currentCommute.origin.name } <br/>
            on line { this.props.currentCommute.origin.line } <br/>
            at {this.props.currentCommute.time} <br/>
            You get off at {this.props.currentCommute.destination.name} <br/></p><hr/>
        </div>

        <h2> These are its matches: </h2>

          {this.props.matches.map((match, i) => {
            return <div>
              <h3> Match name: {match.profile.name} </h3>
                <p> Bio: {match.profile.bio} </p>
                Commute name: {match.nickname} <br/>
                at station {match.origin.name} <br/>
                on line {match.origin.line} <br/>
                at {match.time} <br/>
                They will get off at {match.destination.name} <br/>
              <button key={i} onClick={this.handleConnectClick.bind(this, match.id)} > Connect MTYAY </button> <hr/>
            </div>
          })}
     </div>
    )
    }

  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchMatches, fetchCommuteMatches,
    createConnection, fetchCommutes, setCurrentCommute}, dispatch)
}

function mapStateToProps(state, ownProps){
  const id = parseInt(ownProps.params.id, 10)
  console.log('hit map state to props')
  let foundCommute = {}
  if (state.commutes.length > 0) {
      console.log('in the if on line 62')
      console.log(state.commutes)
      foundCommute = state.commutes.find( (commute) => { return commute.id === id })
  }
  return {
    matches: state.matches,
    commutes: state.commutes,
    currentCommute: foundCommute
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommuteShow)
