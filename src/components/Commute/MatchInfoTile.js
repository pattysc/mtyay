import React from 'react';
import { Link } from 'react-router'
import  { Row, Col, Button } from 'react-materialize'


export default function MatchInfoTile(props){
  // props are..
  // commute: the matching commute object
  // commute.buttonState:
  //    includes .clicked(bool) and .text(string)
  // handleConnectClick: the event handler,  bound and with match ID hard-coded
  let match = props.commute
  let index = props.index
  console.log(props.commute)
  if (props.commute) {
    return ( <div key={`div--matchtile-${index}`}>
      <Row>
      <Col s={12} m={6} l={6}>
      <h3 key={`h3--matchtile-${index}`}>
        <Link to={`/profile/${match.profile.id}`}> {match.profile.name}</Link> </h3>
        <h5 key={`p--matchtile-${index}`}> <b>Bio:</b></h5>{match.profile.bio}<h5>
        <b>Commute:</b> {match.nickname} <br/>
        <b>From:</b> {match.origin.name} on the {match.origin.line} train<br/>
        <b>Departing Around:</b> {match.time} <br/>
        Destination: {match.destination.name} </h5>
      </Col>
      <Col s={12} m={6} l={6} className='center' >
          <img className='commute-tile' src={match.profile.picture}/>
          <Link to={`/profile/${match.profile.id}`}>
            <Button id='commute-match-tile-profile' className='btn amber darken-4'>
          View Profile</Button>
          </Link>
        {/* <div>'photo here'</div> */}
      </Col>
      </Row>
    </div> )
  } else {
    return (
      <div>Loading</div>
    )

  }
}
