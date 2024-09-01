import { fullTrim, getTotal, nameIsValid } from '../src/app.js'

describe('Проверка функции fullTrim', () => {
    it('Проверка пустой строки', () => {
       expect(fullTrim('')).toBe('')
    })

    it('Проверка удаления внутренних пробелов', () => {
        expect(fullTrim('Первый Второй Третий')).toBe('ПервыйВторойТретий')
     })

     it('Проверка удаления внешних пробелов', () => {
        expect(fullTrim(' пробел ')).toBe('пробел')
     })
})

describe('Проверка функции getTotal', () => {
   it('Проверка нулевой скидки', () => {
      expect(getTotal([{ price: 10, quantity: 2 }])).toBe(20)
   })
   it('Проверка ненулевой скидки', () => {
      expect(getTotal([{ price: 10, quantity: 2 }, { price: 2, quantity: 100 }], 50)).toBe(110)
   })
})

describe('Проверка функции getTotal Параметризованный тест', () => {
   test.each([
     [[{ price: 10, quantity: 2 }],20]
   ])('%s общая сумма %s', (a,expected) => {
      expect(getTotal(a)).toBe(expected)
   })
})

describe('Проверка функции nameIsValid', () => {
  it('Проверка длины имени', () => {
     expect(nameIsValid('z')).toBe(false)
  })
  it('Проверка латинских символов', () => {
   expect(nameIsValid('Шарапова')).toBe(false)
})
})