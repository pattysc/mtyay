import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { browserHistory } from 'react-router'
import {fetchMatches} from '../actions'


class CommuteShow extends Component {
  componentDidMount(){
    // fetch matches for an id
    this.props.fetchCommuteMatches(this.props.params.id)
  }

  handleConnectClick(event){
    debugger;
  }

  render(){
    console.log(this.props.matches);
    return(
      <div>
        <div className="yourCommute">
          <h2>This is your commute:</h2>
          <p></p>
        </div>

        <h2> These are your matches </h2>
          {this.props.matches.map((match, i) => {
            return <div>
              <h3> Match name: {match.profile.name} </h3>
                <p> Bio: {match.profile.bio} </p>
                Commute name: {match.nickname} <br/>
                at station {match.origin.name} <br/>
                on line {match.origin.line} <br/>
                at {match.time} <br/>
                They will get off at {match.destination.name} <br/>
              <button key={i} onClick={this.handleConnectClick.bind(this)} > Connect MTYAY </button> <hr/>
            </div>
          })}
     </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchMatches}, dispatch)
}

function mapStateToProps(state){
  state.matches[0]
  return {
    matches: state.matches
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommuteShow)
