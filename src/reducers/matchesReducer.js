export default function matchesReducer(state=[], action){
  switch (action.type) {
    case 'FETCH_MATCHES':
      return action.payload
    case 'FETCH_COMMUTE_MATCHES':
      return action.payload
    default:
      return state
  }
}
