// Classe Livro
class Livro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo; // Título do livro
        this.autor = autor;   // Autor do livro
        this.genero = genero; // Gênero do livro
        this.disponivel = true; // Status de disponibilidade
    }

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false; // Marca o livro como emprestado
            console.log(`O livro "${this.titulo}" foi emprestado.`);
        } else {
            console.log(`O livro "${this.titulo}" não está disponível.`);
        }
    }

    devolver() {
        this.disponivel = true; // Marca o livro como disponível
        console.log(`O livro "${this.titulo}" foi devolvido.`);
    }
}

// Classe Biblioteca
class Biblioteca {
    constructor(nome) {
        this.nome = nome; // Nome da biblioteca
        this.livros = []; // Lista de livros
    }

    adicionarLivro(livro) {
        this.livros.push(livro); // Adiciona um livro à biblioteca
        console.log(`O livro "${livro.titulo}" foi adicionado à biblioteca ${this.nome}.`);
    }

    listarLivrosDisponiveis(generoFiltro = null) {
        // Filtra os livros disponíveis, opcionalmente por gênero
        const livrosDisponiveis = this.livros.filter(livro => livro.disponivel);
        
        if (generoFiltro) {
            return livrosDisponiveis.filter(livro => livro.genero.toLowerCase() === generoFiltro.toLowerCase());
        }
        
        return livrosDisponiveis;
    }
}

// Testando as classes
const biblioteca = new Biblioteca("Biblioteca Municipal");

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", "Literatura");
const livro2 = new Livro("1984", "George Orwell", "Ficção Científica");
const livro3 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia");

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

// Emprestando um livro
livro1.emprestar();

// Listando livros disponíveis
console.log("Livros disponíveis na biblioteca:");
const livrosDisponiveis = biblioteca.listarLivrosDisponiveis();
livrosDisponiveis.forEach(livro => {
    console.log(`- "${livro.titulo}" de ${livro.autor} (${livro.genero})`);
});

// Devolvendo um livro
livro1.devolver();

// Listando livros disponíveis novamente
console.log("Livros disponíveis na biblioteca após devolução:");
const livrosDisponiveisApósDevolucao = biblioteca.listarLivrosDisponiveis();
livrosDisponiveisApósDevolucao.forEach(livro => {
    console.log(`- "${livro.titulo}" de ${livro.autor} (${livro.genero})`);
});

// Filtrando livros disponíveis por gênero
console.log("Livros disponíveis do gênero 'Ficção Científica':");
const ficcaoCientifica = biblioteca.listarLivrosDisponiveis("Ficção Científica");
ficcaoCientifica.forEach(livro => {
    console.log(`- "${livro.titulo}" de ${livro.autor}`);
});
