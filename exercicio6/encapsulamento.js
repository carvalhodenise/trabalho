class ContaBancaria {
    #saldo; // Propriedade privada
    #titular; // Propriedade privada

    constructor(titular, saldoInicial = 0) {
        this.#titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente ou valor de saque inválido.");
        }
    }

    verSaldo() {
        return `Saldo atual de ${this.#titular}: R$${this.#saldo.toFixed(2)}`;
    }
}

// Testando a classe ContaBancaria
const conta = new ContaBancaria("João Silva", 1000);

// Depositando e sacando valores
conta.depositar(500);          // Depósito de R$500
console.log(conta.verSaldo());  // Exibe o saldo atualizado

conta.sacar(200);               // Saque de R$200
console.log(conta.verSaldo());  // Exibe o saldo atualizado

conta.sacar(2000);              // Tentativa de saque com valor maior que o saldo
console.log(conta.verSaldo());  // Exibe o saldo atualizado
