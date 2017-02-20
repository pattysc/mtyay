export default function requestsReducer(state=[], action){
  switch (action.type) {
    case 'FETCH_REQUESTS':
      console.log(action.payload);
      return action.payload
    default:
      return state
  }
}
