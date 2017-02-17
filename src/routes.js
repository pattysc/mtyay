import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import MainPage  from './components/MainPage'
import UserSignUp  from './components/UserSignUp'
import UserLogIn  from './components/UserLogIn'
import ProfileApp  from './components/ProfileApp'
import ProfileShow  from './components/ProfileShow'
import ProfileCreate  from './components/ProfileCreate'
import CommuteCreate  from './components/CommuteCreate'
import CommuteDashboard from './components/CommuteDashboard'
import CommuteMatches  from './components/CommuteMatches'
import CommuteApp  from './components/CommuteApp'
import CommuteShow  from './components/CommuteShow'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="signup" component={UserSignUp} />
    <Route path="login" component={UserLogIn} />

    <Route path="profile" component={ProfileApp}>
      <Route path='new' component={ProfileCreate}/>
      <Route path=':id' component={ProfileShow}/>
    </Route>

    <Route path="commute" component={CommuteApp}>
      <IndexRoute component={CommuteDashboard}/>
      <Route path='new' component={CommuteCreate}/>
      <Route path='matches' component={CommuteMatches}/>
      <Route path=':id' component={CommuteShow}/>
    </Route>
  </Route>
)
