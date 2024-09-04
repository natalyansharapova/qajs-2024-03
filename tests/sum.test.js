import { sum } from '../src/sum.js'

describe('Проверка функции sum', () => {
    it('Должно быть 6', () => {
        expect(sum(3)).toBe(6)
    })
})
