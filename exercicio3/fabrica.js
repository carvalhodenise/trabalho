function criarPessoa(nome, idade, profissao) {
    return {
        nome: nome,
        idade: idade,
        profissao: profissao,

        saudar() {
            return `Olá, meu nome é ${this.nome}!`;
        },

        mostrarInfo() {
            return `Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`;
        }
    };
}

// Testando a função criando várias pessoas
const pessoa1 = criarPessoa("Maria", 30, "Engenheira");
const pessoa2 = criarPessoa("João", 25, "Designer");
const pessoa3 = criarPessoa("Ana", 40, "Professora");

// Chamando os métodos para verificar o funcionamento
console.log(pessoa1.saudar());            // Saída: "Olá, meu nome é Maria!"
console.log(pessoa1.mostrarInfo());       // Saída: "Nome: Maria, Idade: 30, Profissão: Engenheira"

console.log(pessoa2.saudar());            // Saída: "Olá, meu nome é João!"
console.log(pessoa2.mostrarInfo());       // Saída: "Nome: João, Idade: 25, Profissão: Designer"

console.log(pessoa3.saudar());            // Saída: "Olá, meu nome é Ana!"
console.log(pessoa3.mostrarInfo());       // Saída: "Nome: Ana, Idade: 40, Profissão: Professora"
