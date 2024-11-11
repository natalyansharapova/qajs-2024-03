import config from '../framework/config/config.js'
import {
  createBook,
  getBook,
  deleteBook,
} from '../framework/services/BookService.js'
import { getToken } from '../framework/services/AuthService.js'

describe('Книга', () => {
  it('(Н) Создание', async () => {
    const authToken = await getToken(config.userName, config.password)
    const response = await createBook(authToken, config.userId, config.isbn)
    console.log(response.data)
    expect(response.status).toBe(400)
    expect(response.data.code).toBe('1210')
  })

  it('(П) Получение', async () => {
    const response = await getBook(config.isbn)
    expect(response.data.isbn).toBe(config.isbn)
    expect(response.status).toBe(200)
  })

  it('(Н) Удалениe', async () => {
    const authToken = await getToken(config.userName, config.password)
    const response = await deleteBook(authToken, config.isbn, config.userId)
    expect(response.status).toBe(401)
    expect(response.data.code).toBe('1200')
  })
})
