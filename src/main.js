import { greet, farewell } from './modules.js'
import { getScore } from './app.js'

const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
    }
console.log(greet('World'))
console.log(farewell('World'))
console.log(getScore(scores))