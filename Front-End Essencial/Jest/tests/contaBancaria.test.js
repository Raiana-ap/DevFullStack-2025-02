const ContaBancaria = require('../src/contaBancaria.js');
describe('Testando a classe ContaBancaria', () => {
    let conta;

    beforeEach(() => {
        conta = new ContaBancaria('Geromel');
    });

    test('Saldo inicial deve ser zero', () => {
        expect(conta.consultarSaldo()).toBe(0);
    });

    describe('Depósito', () => {
        test('Depositar valor positivo atualiza saldo e extrato', () => {
            conta.depositar(200);
            expect(conta.consultarSaldo()).toBe(200);
            const extrato = conta.obterExtrato();
            expect(extrato).toHaveLength(1);
            expect(extrato[0]).toMatchObject({ tipo: 'depósito', valor: 200 });
        });

        test.each([0, -50, '100'])(
            'Depositando valor inválido %p deve lançar erro apropriado',
            (valorInvalido) => {
                expect(() => conta.depositar(valorInvalido))
                    .toThrow('O valor do depósito deve ser número e maior que zero');
            }
        );
    });

    describe('Saque', () => {
        beforeEach(() => {
            conta.depositar(150);
        });

        test('Sacar valor válido reduz saldo e registra no extrato', () => {
            conta.sacar(50);
            expect(conta.consultarSaldo()).toBe(100);
            const ultimo = conta.obterExtrato().slice(-1)[0];
            expect(ultimo).toMatchObject({ tipo: 'saque', valor: 50 });
        });

        test.each([0, -30, '30'])(
            'Saque de valor inválido %p deve lançar erro',
            (valorInvalido) => {
                expect(() => conta.sacar(valorInvalido))
                    .toThrow('O valor do saque deve ser número e maior que zero');
            }
        );

        test('Sacar valor maior que saldo lança erro de saldo insuficiente', () => {
            expect(() => conta.sacar(200)).toThrow('Saldo insuficiente');
        });
    });
});