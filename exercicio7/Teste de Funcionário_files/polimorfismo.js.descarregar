// Classe Funcionario
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario() {
        return this.salario; // Salário base para um funcionário
    }

    mostrarDetalhes() {
        return `Nome: ${this.nome}, Salário: R$${this.calcularSalario().toFixed(2)}`;
    }
}

// Subclasse Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario); // Chamando o construtor da classe pai
        this.bonus = bonus;
    }

    calcularSalario() {
        return this.salario + this.bonus; // Salário do gerente com bônus
    }

    mostrarDetalhes() {
        return `Nome: ${this.nome}, Salário: R$${this.calcularSalario().toFixed(2)}, Bônus: R$${this.bonus.toFixed(2)}`;
    }
}

// Testando as classes Funcionario e Gerente
const funcionario1 = new Funcionario("Carlos", 3000);
const gerente1 = new Gerente("Ana", 5000, 1500);

// Exibindo detalhes
console.log(funcionario1.mostrarDetalhes()); // Exibe detalhes do funcionário
console.log(gerente1.mostrarDetalhes());     // Exibe detalhes do gerente
