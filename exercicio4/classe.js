class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }

    mostrarDetalhes() {
        return `Produto: ${this.nome}\nCategoria: ${this.categoria}\nPreço: R$${this.preco.toFixed(2)}`;
    }
}

// Testando a classe Produto
const produto1 = new Produto("Notebook", 3000, "Eletrônicos");
const produto2 = new Produto("Camiseta", 50, "Vestuário");

// Aplicando desconto
produto1.aplicarDesconto(10);  // Aplica 10% de desconto
produto2.aplicarDesconto(20);  // Aplica 20% de desconto

// Exibindo detalhes dos produtos
console.log(produto1.mostrarDetalhes());  // Saída: detalhes do produto com preço reduzido
console.log(produto2.mostrarDetalhes());  // Saída: detalhes do produto com preço reduzido
