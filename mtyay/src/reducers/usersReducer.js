export default function userReducer(state={}, action){
  switch (action.type) {
    case 'CREATE_USER':
      const user = { email: action.payload.data.email, id: action.payload.data.id }
      return user
    default:
      return state
  }
}
