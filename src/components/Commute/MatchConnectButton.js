import React from 'react';
import { Link } from 'react-router'
import  { Button, Row } from 'react-materialize'

export default function MatchConnectButton(props){
// props are..
// commute: the matching commute object
// commute.buttonState:
//    includes .clicked(bool) and .text(string)
// handleConnectClick: the event handler,  bound and with match ID hard-coded
// index = index
let match = props.commute
let index = props.index

  return (
    <div className="matchConnectButton" key={`div--matchButton-${index}`}>
          <Row>
            <Button className="matchConnectButton btn deep-orange darken-3" key={`button--matchButton-${index}`}
            onClick={props.handleConnectClick} disabled={props.disabled}> {match.button.text} </Button>
          </Row>

    </div> )
}
