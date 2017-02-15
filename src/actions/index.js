import axios from 'axios'
import { browserHistory } from 'react-router'

axios.defaults.baseURL = 'http://localhost:3000/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const createUser = (user) => {
  const response = axios.post('/signup', user).then(function(userData){
    sessionStorage.setItem('jwt', userData.data.jwt)
    browserHistory.push('/profile/new')
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

export const createProfile = (profile) => {
  const response = axios.post('/profiles', profile).then(function(profileData){
    browserHistory.push('/profile')
    return profileData
  })

  return {
    type: 'CREATE_PROFILE',
    payload: response
  }
}
