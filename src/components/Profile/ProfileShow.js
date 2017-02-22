import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchProfile } from '../../actions'
import _ from 'lodash'
import { Card, CardTitle } from 'react-materialize'

class ProfileShow extends Component {
  constructor(props){
    super(props)
    props.fetchProfile(this.props.params.id)
  }

  render(){
    let profile = this.props.profile
    let keys = Object.keys(profile).map((profile_key) => {
      if (profile[profile_key]) {
        switch (profile_key) {
          case '':
            break
          case 'id':
            break
          case 'commutes':
            return <Link to={`/commute`}><button>Show Commutes</button><br/></Link>
          case 'picture':
            return <div><img className={'profile-pic'} src={profile[profile_key]} /><br/></div>
          case 'socialMedia':

          default:
            return <p>{_.capitalize(profile_key)}: {profile[profile_key]}</p>
        }
      }
    }).filter(element => element != undefined)
    return(
      <div >
        {/* <Card className='medium'
        header={<CardTitle >{this.props.profile.name}</CardTitle>}
        actions={[<a href='#'>This is a Link</a>]}>
        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
        </Card> */}
        <h3>{this.props.profile.name}'s Profile</h3>
        {keys}
        <Link to={'/commute/new'}><button>Add a Commute</button></Link><br/>
        <Link to={'/commute/matches'}><button>Show Matches</button></Link><br/>
        <Link to={'/connections/requests'}><button>Show Requests</button></Link><br/>
        <Link to={'/connections'}><button>Show Connections</button></Link><br/>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchProfile}, dispatch)
}

function mapStateToProps(state){
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow)
