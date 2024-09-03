import config from '../framework/config/config.js'
import GenerateToken from '../framework/services/AuthServices.js'

describe('Авторизация', () => {
    it('Успешная авторизаця', async () => {

        const response = await GenerateToken({
          userName: '1',
          password: '1'
        })
        expect(response.status).toBe(200)
    })
})