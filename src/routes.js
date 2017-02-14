import React from 'react'
import { Route } from 'react-router'
import App from './App'
import UserSignUp  from './components/UserSignUp'
import ProfileApp  from './components/ProfileApp'
import ProfileShow  from './components/ProfileShow'
import ProfileCreate  from './components/ProfileCreate'



export default (
  <Route path="/" component={App}>
    <Route path="signup" component={UserSignUp} />
    <Route path="profile" component={ProfileApp}>
      <Route path='new' component={ProfileCreate}/>
      <Route path=':id' component={ProfileShow}/>
    </Route>
  </Route>
)
