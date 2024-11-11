import axios from 'axios'
import config from '../config/config'

const client = axios.create({
  baseURL: config.baseURL,
  validateStatus: null,
})

// Добавление книги
export const createBook = async (authToken, userId, isbn) => {
  return await client.post(
    '/BookStore/v1/Books',
    {
      userId,
      collectionOfIsbns: [
        {
          isbn,
        },
      ],
    },
    {
      headers: {
        Authorization: 'Bearer ' + authToken,
        'Content-Type': 'application/json',
      },
    },
  )
}

// Получение данных книги
export const getBook = async ISBN => {
  return await client.get(
    '/BookStore/v1/Book/',
    { params: { ISBN } },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

// Удаление данных книги
export const deleteBook = async (authToken, isbn, userId) => {
  return await client.delete(
    '/BookStore/v1/Book',
    { isbn, userId },
    {
      headers: {
        Authorization: 'Bearer ' + authToken,
        'Content-Type': 'application/json',
      },
    },
  )
}
