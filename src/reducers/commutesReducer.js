export default function commutesReducer(state=[], action){
  switch (action.type) {
    case 'FETCH_COMMUTES':
      console.log(action)
      return action.payload
    default:
      return state
  }
}
