export default function pictureReducer(state='', action){
  switch (action.type) {
    case 'UPLOAD_PICTURE':
    console.log('reducer');
      return action.payload
    default:
      return state
  }
}
