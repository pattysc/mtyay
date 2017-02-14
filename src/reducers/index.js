import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import errorsReducer from './errorsReducer'
import profilesReducer from './profilesReducer'

const rootReducer = combineReducers({
  user: usersReducer,
  errors: errorsReducer,
  profile: profilesReducer
})


export default rootReducer
