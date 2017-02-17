export default function currentCommuteReducer(state={}, action){
  switch (action.type) {
    case 'SET_CURRENT_COMMUTE':
      return action.payload
    
    default:
      return state
  }
}
