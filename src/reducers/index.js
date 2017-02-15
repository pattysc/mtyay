import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import errorsReducer from './errorsReducer'
import profilesReducer from './profilesReducer'
import commuteReducer from './commutesReducer'
import matchesReducer from './matchesReducer'

const rootReducer = combineReducers({
  user: usersReducer,
  errors: errorsReducer,
  profile: profilesReducer,
  commutes: commuteReducer,
  matches: matchesReducer,
})
export default rootReducer
