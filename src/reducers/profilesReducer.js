export default function profilesReducer(state={}, action){
  switch (action.type) {
    case 'CREATE_PROFILE':
      return action.payload.data
    default:
      return state
  }
}
