import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchProfile } from '../../actions'
import _ from 'lodash'

class ProfileShow extends Component {
  constructor(props){
    super(props)
    props.fetchProfile(this.props.params.id)
  }

  render(){
    let profile = this.props.profile
    let keys = Object.keys(profile).map((profileKey) => {
      if (profile[profileKey]) {
        switch (profileKey) {
          case 'id':
            break
          case 'commutes':
            return <Link to={`/commute`}><button>Show Commutes</button><br/></Link>
          case 'picture':
            return <div><img className={'profile-pic'} src={profile[profileKey]} /><br/></div>
          case 'socialMedia':
            let smProfile = profile[profileKey]
            return Object.keys(smProfile).map(smProfileKey => {
              console.log(profile[profileKey]);
              if (smProfile[smProfileKey]){
                switch (smProfileKey) {
                  case 'linkedin':
                    return <div><a target='_blank' href={`https://linkedin.com/in/${smProfile[smProfileKey]}`}> <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a><br/></div>
                  // case 'twitter':
                  //   return <div><a target='_blank' href={`https://twitter.com/${smProfile[smProfileKey]}`}> <i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a><br/></div>
                  // case 'facebook':
                  //   return <div><a target='_blank' href={`https://facebook.com/${smProfile[smProfileKey]}`}> <i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a><br/></div>
                  // case 'instagram':
                  //   return <div><a target='_blank' href={`https://instagram.com/${smProfile[smProfileKey]}`}> <i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a><br/></div>
                  // case 'skype':
                  //   return <div><a target='_blank' href={`https://skype.com/${smProfile[smProfileKey]}`}> <i className="fa fa-skype fa-2x" aria-hidden="true"></i></a><br/></div>
                  case 'goodreads':
                    return <div><a target='_blank' href={`https://goodreads.com/${smProfile[smProfileKey]}`}> goodreads</a><br/></div>
                  default:
                    return <div><a target='_blank' href={`https://${smProfileKey}.com/${smProfile[smProfileKey]}`}><i className={`fa fa-${smProfileKey} fa-2x`} aria-hidden="true"></i></a><br/></div>
                  }
              }
            }).filter(element => element != undefined)
          default:
            return <p>{_.capitalize(profileKey)}: {profile[profileKey]}</p>
        }
      }
    }).filter(element => element != undefined)
    return(
      <div className={'white-bg'}>
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
