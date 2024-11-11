import axios from 'axios'
import config from '../config/config'

const client = axios.create({
  baseURL: config.baseURL,
  validateStatus: null,
})

export const getToken = async (userName, password) => {
  const response = await client.post('/Account/v1/GenerateToken', {
    userName,
    password,
  })
  return response.data.token
}
