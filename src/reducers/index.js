import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import errorsReducer from './errorsReducer'
import profilesReducer from './profilesReducer'
import commuteReducer from './commutesReducer'
import matchesReducer from './matchesReducer'
import connectionsReducer from './connectionsReducer'
import requestsReducer from './requestsReducer'
// import currentCommuteReducer from './currentCommuteReducer'

const rootReducer = combineReducers({
  user: usersReducer,
  errors: errorsReducer,
  profile: profilesReducer,
  commutes: commuteReducer,
  matches: matchesReducer,
  requests: requestsReducer,
  connections: connectionsReducer
})
export default rootReducer
