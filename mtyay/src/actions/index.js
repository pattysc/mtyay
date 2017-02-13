import axios from 'axios'
import browserHistory from 'react-router'

const URL = 'http://localhost:3000/api/v1'

export const createUser = (user) => {
  const response = axios.post(URL + '/signup', user).then(function(userData){
    sessionStorage.setItem({ jwt: userData.data.jwt })
    browserHistory.push('/commutes')
    return userData
  })

  return {
    type: 'CREATE_USER',
    payload: response
  }
}
