export default function connectionsReducer(state=[], action){
  switch (action.type) {
    case 'FETCH_CONNECTIONS':
      console.log('reducer');
      return action.payload
    default:
      return state
  }
}
