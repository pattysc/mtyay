import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { browserHistory } from 'react-router'
import {fetchMatches} from '../actions'


class CommuteMatches extends Component {
  componentDidMount(){
    this.props.fetchMatches()
  }

  render(){
    console.log(this.props.matches);
    return(
      <div> these are your matches </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchMatches}, dispatch)
}

function mapStateToProps(state){
  return {
    matches: state.matches
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommuteMatches)
