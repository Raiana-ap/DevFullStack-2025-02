class ContaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
    this.extrato = [];
  }

  depositar(valor) {
    if (typeof valor !== 'number' || valor <= 0) {
      throw new Error('O valor do depósito deve ser número e maior que zero');
    }
    this.saldo += valor;
    this.extrato.push({ tipo: 'depósito', valor, data: new Date() });
  }

  sacar(valor) {
    if (typeof valor !== 'number' || valor <= 0) {
      throw new Error('O valor do saque deve ser número e maior que zero');
    }
    if (valor > this.saldo) {
      throw new Error('Saldo insuficiente para saque');
    }
    this.saldo -= valor;
    this.extrato.push({ tipo: 'saque', valor, data: new Date() });
  }

 
  consultarSaldo() {
    return this.saldo;
  }

  obterExtrato() {
    return this.extrato;
  }
}

module.exports = ContaBancaria;