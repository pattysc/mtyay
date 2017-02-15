import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import UserSignUp  from './components/UserSignUp'
import ProfileApp  from './components/ProfileApp'
import ProfileShow  from './components/ProfileShow'
import ProfileCreate  from './components/ProfileCreate'
import CommuteCreate  from './components/CommuteCreate'
import CommuteDashboard from './components/CommuteDashboard'
import CommuteMatches  from './components/CommuteMatches'
import CommuteApp  from './components/CommuteApp'

export default (
  <Route path="/" component={App}>
    <Route path="signup" component={UserSignUp} />

    <Route path="profile" component={ProfileApp}>
      <Route path='new' component={ProfileCreate}/>
      <Route path=':id' component={ProfileShow}/>
    </Route>

    <Route path="commute" component={CommuteApp}>
      <IndexRoute component={CommuteDashboard}/>
      <Route path='new' component={CommuteCreate}/>
      <Route path='matches' component={CommuteMatches}/>
      {/* <Route path=':id' component={CommuteShow}/> */}
    </Route>
  </Route>
)
