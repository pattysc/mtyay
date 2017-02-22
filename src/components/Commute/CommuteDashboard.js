import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import {fetchCommutes, fetchCommuteMatches} from '../../actions'
import { Button, Row, Col } from 'react-materialize'

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
      <div>
      <div className='whitebg'>
      <Row>
        <Col s={6} className='center' >
          <Button className='btn deep-orange darken-3 commute-dash' onClick={this.addCommute.bind(this)}>Add a Commute</Button>
        </Col>
        <Col s={6} className='center' >
          <Button className='btn deep-orange darken-3 commute-dash' onClick={this.showMatches.bind(this)}>Show All Matches</Button><br/>
        </Col>
      </Row>
      </div>
        <div className='whitebg'>
          <h1> Your Commutes </h1>
        </div>
        {this.props.commutes.map( (commute, i) => {
          return (
          <div className='whitebg'>
          <h3><b>{commute.nickname}</b></h3>
            <h5><b>From:</b> {commute.origin.name} on the {commute.origin.line} train<br/>
            <b>Departing Around:</b> {commute.time}<br/>
            <b>Destination Station:</b> {commute.destination.name}<br/></h5>


          <Button className='btn amber darken-4' value={commute.id} onClick={this.findMatch.bind(this)}>Find Matches</Button><br/>
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
