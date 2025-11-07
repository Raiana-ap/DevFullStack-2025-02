import {describe, it, expect } from 'vitest'
import { sum } from './sum.js'

describe('sum', ()  => {
    it('deve retornar a soma de dois números.', () => {
        expect(sum(1,2)).toBe(3)
    })
})

// npx vitest