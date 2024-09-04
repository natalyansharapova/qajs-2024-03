import config from '../framework/config/config.js'
import { GenerateToken } from '../framework/services/AuthService.js'
import { GetUser, DeleteUser } from '../framework/services/UserService.js'

describe.only('Авторизация', () => {
    it('Успешная авторизаця', async () => {
      const response = await GenerateToken(  
        config.username,
        config.password
      )
      expect(response.status).toBe(200)
    })
})

describe.only('Пользователь', () => {
  it('Получение информации о пользователе', async () => {
    const response = await GetUser(  
      config.userID
    )
    expect(response.status).toBe(200)
  })
  
  it('Удаление пользователя', async () => {
    const response = await DeleteUser(  
       config.userfordeleteID
    )
    expect(response.status).toBe(200)
})
})