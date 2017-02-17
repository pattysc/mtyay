import axios from 'axios'
import { browserHistory } from 'react-router'

axios.defaults.baseURL = 'http://localhost:3000/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const createUser = (user) => {
  const response = axios.post('/signup', user).then(function(userData){
    sessionStorage.setItem('jwt', userData.data.jwt)
    axios.defaults.headers.common['AUTHORIZATION'] = userData.data.jwt
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
    type: 'SET_USER',
    payload: response
  }
}

export const setUser = (user) => {
  const response = axios.post('/login', user).then(function(userData){
    sessionStorage.setItem('jwt', userData.data.jwt)
    axios.defaults.headers.common['AUTHORIZATION'] = userData.data.jwt
    browserHistory.push('/commute')
    return userData
  })
  return {
    type: 'SET_USER',
    payload: response
  }
}

export const createProfile = (profile) => {
  const response = axios.post('/profiles', profile).then(function(profileData){
    browserHistory.push(`/profile/${profileData.data.id}`)
    return profileData.data
  })
  return {
    type: 'CREATE_PROFILE',
    payload: response
  }
}

export const fetchProfile = (profile_id) => {
  const response = axios.get(`/profiles/${profile_id}`).then((profileData) => {
    return profileData.data
  })
  return {
    type: 'FETCH_PROFILE',
    payload: response
  }
}

export const fetchCommutes = () => {
  const response = axios.get('/commutes').then(function(commuteData){
    return commuteData.data
  })
  return {
    type: 'FETCH_COMMUTES',
    payload: response
  }
}

export const fetchMatches = () => {
  const response = axios.get('/matches').then(function(commuteData){
    return commuteData.data
  })
  return{
    type: 'FETCH_MATCHES',
    payload: response
  }
}

export const fetchCommuteMatches = (id) => {
  console.log('hitting fetchCommuteMatches action')
  const response = axios.get(`/matches/?id=${id}`).then(function(commuteData){
    return commuteData.data
  })
  return{
    type: 'FETCH_COMMUTE_MATCHES',
    payload: response
  }
}