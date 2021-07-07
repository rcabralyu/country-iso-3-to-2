import { getISO2, getISO3 } from './index'

const resultISO2 = getISO2('BRA')
console.assert(resultISO2 === 'BR')

const resultISO3 = getISO3('BR')
console.assert(resultISO3 === 'BRA')
