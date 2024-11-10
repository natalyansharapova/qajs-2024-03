import axios from 'axios'
import config from '../config/config'

const client = axios.create({
  baseURL: config.baseURL + '/Account/v1/User/',
  validateStatus: null,
})

export const getUser = async (authToken, userId) => {
  return await client.get(userId, {
    headers: {
      Authorization: 'Bearer ' + authToken,
      'Content-Type': 'application/json',
    },
  })
}

export const deleteUser = async (authToken, userId) => {
  return await client.delete(userId, {
    headers: {
      Authorization: 'Bearer ' + authToken,
      'Content-Type': 'application/json',
    },
  })
}
