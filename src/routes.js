import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import MainPage  from './components/MainPage'
import UserSignUp  from './components/UserSignUp'
import UserLogIn  from './components/UserLogIn'
import ProfileApp  from './components/Profile/ProfileApp'
import ProfileShow  from './components/Profile/ProfileShow'
import ProfileCreate  from './components/Profile/ProfileCreate'
import CommuteCreate  from './components/Commute/CommuteCreate'
import CommuteDashboard from './components/Commute/CommuteDashboard'
import CommuteMatches  from './components/Commute/CommuteMatches'
import CommuteApp  from './components/Commute/CommuteApp'
import CommuteShow  from './components/Commute/CommuteShow'
import ConnectionsRequests from './components/Connections/ConnectionsRequests'
import ConnectionsIndex from './components/Connections/ConnectionsIndex'

const requireAuth = (nextState, replace) => {
  if (!sessionStorage.jwt){
    replace('/')
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="signup" component={UserSignUp} />
    <Route path="login" component={UserLogIn} />

      <Route path="profile" component={ProfileApp}> {/* we can refactor and put require auth here instead of twice below but i feel bad making you guys pull AGAIN */}
        <Route path='new' component={ProfileCreate} onEnter={requireAuth}/>
        <Route path=':id' component={ProfileShow} onEnter={requireAuth}/>
      </Route>

    <Route path="commute" component={CommuteApp} onEnter={requireAuth}>
      <IndexRoute component={CommuteDashboard}/>
      <Route path='new' component={CommuteCreate}/>
      <Route path='matches' component={CommuteMatches}/>
      <Route path=':id' component={CommuteShow}/>
    </Route>

    <Route path="connections/requests" component={ConnectionsRequests} onEnter={requireAuth}/>
    <Route path="connections" component={ConnectionsIndex} onEnter={requireAuth}/>

  </Route>
)
