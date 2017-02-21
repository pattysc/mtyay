export default function userReducer(state={}, action){
  switch (action.type) {
    case 'SET_USER':
      const user = { email: action.payload.email, id: action.payload.id }
      return user
    default:
      return state
  }
}
