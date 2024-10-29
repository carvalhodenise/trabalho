// Classe Produto
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
        return `Produto: ${this.nome}<br>Categoria: ${this.categoria}<br>Preço: R$${this.preco.toFixed(2)}`;
    }
}

// Classe Eletronico que herda de Produto
class Eletronico extends Produto {
    constructor(nome, preco, categoria, garantia) {
        super(nome, preco, categoria); // Chamando o construtor da classe pai
        this.garantia = garantia;
    }

    // Sobrescrevendo o método mostrarDetalhes para incluir a garantia
    mostrarDetalhes() {
        return `${super.mostrarDetalhes()}<br>Garantia: ${this.garantia} anos`;
    }
}

// Criando uma instância de Eletronico e testando os métodos
const eletronico1 = new Eletronico("Smartphone", 2000, "Eletrônicos", 2);

// Aplicando desconto
eletronico1.aplicarDesconto(15); // Aplica 15% de desconto

// Exibindo detalhes da instância Eletronico no HTML
const resultados = document.getElementById("resultados");
resultados.innerHTML = eletronico1.mostrarDetalhes();
