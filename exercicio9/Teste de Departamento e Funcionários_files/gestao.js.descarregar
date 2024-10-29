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

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, salario, projetoAtual) {
        super(nome, salario);
        this.projetoAtual = projetoAtual; // Projeto atual do desenvolvedor
    }

    mostrarDetalhes() {
        return `${super.mostrarDetalhes()}, Projeto Atual: ${this.projetoAtual}`;
    }
}

// Classe Designer que herda de Funcionario
class Designer extends Funcionario {
    constructor(nome, salario, portifolio) {
        super(nome, salario);
        this.portifolio = portifolio; // Portfólio do designer
    }

    mostrarDetalhes() {
        return `${super.mostrarDetalhes()}, Portfólio: ${this.portifolio}`;
    }
}

// Classe Departamento
class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = []; // Lista de funcionários
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
        console.log(`Funcionário ${funcionario.nome} adicionado ao departamento ${this.nome}.`);
    }

    removerFuncionario(nome) {
        this.funcionarios = this.funcionarios.filter(funcionario => funcionario.nome !== nome);
        console.log(`Funcionário ${nome} removido do departamento ${this.nome}.`);
    }

    mostrarFuncionarios() {
        return this.funcionarios.map(funcionario => funcionario.mostrarDetalhes()).join("<br>");
    }
}

// Testando as classes
const departamentoTI = new Departamento("Tecnologia da Informação");

const dev1 = new Desenvolvedor("Carlos", 4000, "Aplicativo Móvel");
const dev2 = new Desenvolvedor("Ana", 4500, "Sistema de Gestão");
const designer1 = new Designer("Maria", 3500, "Portfolio de Design Gráfico");

departamentoTI.adicionarFuncionario(dev1);
departamentoTI.adicionarFuncionario(dev2);
departamentoTI.adicionarFuncionario(designer1);

// Mostrando os funcionários do departamento
console.log("Funcionários do Departamento de TI:");
console.log(departamentoTI.mostrarFuncionarios());

// Removendo um funcionário
departamentoTI.removerFuncionario("Carlos");

// Mostrando os funcionários após remoção
console.log("Funcionários do Departamento de TI após remoção:");
console.log(departamentoTI.mostrarFuncionarios());
