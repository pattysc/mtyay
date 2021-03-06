import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import MainPage  from './components/MainPage'
import UserSignUp  from './components/UserSignUp'
import UserLogIn  from './components/UserLogIn'
import ProfileApp  from './components/Profile/ProfileApp'
import ProfileShow  from './components/Profile/ProfileShow'
import ProfileCreate  from './components/Profile/ProfileCreate'
import ProfilePicture  from './components/Profile/ProfilePicture'
import CommuteCreate  from './components/Commute/CommuteCreate'
import CommuteDashboard from './components/Commute/CommuteDashboard'
import CommuteMatches  from './components/Commute/CommuteMatches'
import CommuteApp  from './components/Commute/CommuteApp'
import CommuteShow  from './components/Commute/CommuteShow'
import ConnectionsRequests from './components/Connections/ConnectionsRequests'
import ConnectionsIndex from './components/Connections/ConnectionsIndex'
import ConnectionsApp from './components/Connections/ConnectionsApp'

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

    <Route path="profile" component={ProfileApp} onEnter={requireAuth}>
      <Route path='new' component={ProfileCreate} />
      <Route path='picture' component={ProfilePicture} />
      <Route path=':id' component={ProfileShow} />
    </Route>

    <Route path="commute" component={CommuteApp} onEnter={requireAuth}>
      <IndexRoute component={CommuteDashboard}/>
      <Route path='new' component={CommuteCreate}/>
      <Route path='matches' component={CommuteMatches}/>
      <Route path=':id' component={CommuteShow}/>
    </Route>

    <Route path="connections" component={ConnectionsApp} onEnter={requireAuth}>
      <IndexRoute component={ConnectionsIndex}/>
      <Route path="requests" component={ConnectionsRequests}/>
    </Route>

  </Route>
)
