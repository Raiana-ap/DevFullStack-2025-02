const soma = require('../src/soma')
test('Soma 2 + 3 deve ser igual a 5', () => {
    expect(soma(2,3)).toBe(5)
})