import { setToken } from '../utils/auth'
import axios from './interceptors'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`

export const signup = async (formData) => {
  // Sign up a user
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  const { data } = await axios.post(`${BASE_URL}/signup`, formData, config)

  // Set the token to local storage
  if(data.token) {
    setToken(data.token)
  }

  return data
}

export const signin = async (formData) => {
  // Sign up a user
  const { data } = await axios.post(`${BASE_URL}/signin`, formData)

  // Set the token to local storage
  if(data.token) {
    setToken(data.token)
  }

  return data
}

// export const profile = async (formData) => {
//   // Sign up a user
//   const { data } = await axios.post(`${BASE_URL}/profile`, formData)
//   return data
// }