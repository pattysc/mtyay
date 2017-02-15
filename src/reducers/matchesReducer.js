export default function errorsReducer(state=[], action){
  switch (action.type) {
    case 'FETCH_MATCHES':
      return action.payload
    default:
      return state
  }
}
