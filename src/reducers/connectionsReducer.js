export default function connectionsReducer(state={}, action){
  switch (action.type) {
    case 'CREATE_COMMUTE':
      return action.payload
    default:
      return state
  }
}
