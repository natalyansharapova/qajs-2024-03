import config from '../framework/config/config.js'
import { CreateBook,GetBook, DeleteBook } from '../framework/services/BookService.js'

describe('Книга', () => {
  it('Создание книги', async () => {
    const response = await CreateBook(config.userId, config.isbn)
    expect(response.status).toBe(201)
  })
  it('Получение книги', async () => {
    const response = await GetBook( config.isbn)
    expect(response.status).toBe(200)
  })
  it('Удаление книги', async () => {
    const response = await DeleteBook( config.isbn, config.userId )
    expect(response.status).toBe(204)
  })
})