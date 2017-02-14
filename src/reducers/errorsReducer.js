export default function errorsReducer(state=[], action){
  switch (action.type) {
    case 'CREATE_ERROR':
      return action.payload
    default:
      return state
  }
}
