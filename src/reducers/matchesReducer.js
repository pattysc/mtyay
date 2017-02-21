export default function matchesReducer(state=[], action){
  switch (action.type) {
    case 'FETCH_MATCHES':
      return action.payload
    case 'FETCH_COMMUTE_MATCHES':
      return action.payload
    case 'CLICKED_MATCH_BUTTON':
      var index = state.indexOf(action.payload);
      return state.map((match, i) => {
        if (index === i) {
          // Copy the object before mutating
          return Object.assign({}, match, {
            // clicked: true, text: 'Invite Sent!'
            button: {
              text: 'Invite Sent!',
              clicked: true
            }
          })
        }
          return match
      })
    default:
      return state
  }
}
