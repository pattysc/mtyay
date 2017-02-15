import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import errorsReducer from './errorsReducer'
import profilesReducer from './profilesReducer'
import commuteReducer from './commutesReducer'

const rootReducer = combineReducers({
  user: usersReducer,
  errors: errorsReducer,
  profile: profilesReducer,
  commutes: commuteReducer
})


export default rootReducer
