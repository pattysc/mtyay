export default function profilesReducer(state={}, action){
  switch (action.type) {
    case 'CREATE_PROFILE':
      // add code to parse API response object into new {} for state.profile
      return action.payload
    default:
      return state
  }
}
