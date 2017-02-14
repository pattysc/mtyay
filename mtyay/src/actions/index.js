import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = 'http://localhost:3000/v1'

export const createUser = (user) => {
  const response = axios.post(URL + '/signup', user).then(function(userData){
    sessionStorage.setItem('jwt', userData.data.jwt)
    browserHistory.push('/login')
    return userData
  })// .catch(function(error){
  //   return {
  //     type: 'CREATE_ERROR',
  //     payload: error.response.data.errors
  //   }
  // })
  // if (response) {
  //
  // }

  return {
    type: 'CREATE_USER',
    payload: response
  }
}
