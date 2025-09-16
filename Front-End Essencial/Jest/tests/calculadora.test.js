const Calculadora = require('../src/calculadora')
describe('Testando a classe Calcualdora', () => {
    let calc;
    beforeEach(() => {
        calc = new Calculadora();
    });
     test('Deve somar dois números corretamente ', () => {
        expect(calc.somar(4, 5)).toBe(9);
        expect(calc.somar(79, 31)).toBe(110);
    });
    test('Deve subtrair dois números corretamente ', () => {
        expect(calc.subtrair(4, 5)).toBe(-1);
        expect(calc.subtrair(79, 31)).toBe(48);
    });
    test('Deve multiplicar dois números corretamente ', () => {
        expect(calc.multiplicar(4, 5)).toBe(20);
        expect(calc.multiplicar(6, 7)).toBe(42);
    });
    test('Deve dividir dois números corretamente ', () => {
        expect(calc.dividir(20, 5)).toBe(4);
        expect(calc.dividir(42, 7)).toBe(6);
    });
})