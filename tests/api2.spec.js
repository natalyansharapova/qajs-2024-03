import config from '../framework/config/config.js'
import { getUser, deleteUser } from '../framework/services/UserService.js'
import { getToken, isAuth } from '../framework/services/AuthService.js'

describe('Пользователь', () => {
  it('(Н) Проверка авторизации', async () => {
    const response = await isAuth('f', 'f')
    expect(response.status).toBe(404)
  })
  it('(П) Получение информации', async () => {
    const authToken = await getToken(config.userName, config.password)
    const response = await getUser(authToken, config.userId)
    expect(response.status).toBe(200)
    expect(response.data.userId).toBe(config.userId)
  })
  it('(П) Удаление', async () => {
    const authToken = await getToken(
      config.userNameForDelete,
      config.passwordForDelete,
    )
    const response = await deleteUser(authToken, config.userIdForDelete)
    expect(response.status).toBe(200)
  })
})
