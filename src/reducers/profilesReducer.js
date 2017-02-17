export default function profilesReducer(state={}, action){
  switch (action.type) {
    case 'CREATE_PROFILE':
      return action.payload
    case 'FETCH_PROFILE':
      return action.payload
    default:
      return state
  }
}
