import React from 'react';
// import { Link } from 'react-router'

export default function MatchInfoTile(props){
  // props are..
  // commute: the matching commute object
  // commute.buttonState:
  //    includes .clicked(bool) and .text(string)
  // handleConnectClick: the event handler,  bound and with match ID hard-coded
  let match = props.commute
  let index = props.index

  if (props.commute) {
    return ( <div key={`div--matchtile-${index}`}>
      <h3 key={`h3--matchtile-${index}`}> Match name: {match.profile.name} </h3>
        <p key={`p--matchtile-${index}`}> Bio: {match.profile.bio}<br/>
        Commute name: {match.nickname} <br/>
        on line {match.origin.line} at station {match.origin.name} <br/>
        leaving around {match.time} <br/>
        They get off at {match.destination.name} </p>
    </div> )
  } else {
    return (
      <div>Loading</div>
    )

  }
}
