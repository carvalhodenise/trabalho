// Classe ItemInventario
class ItemInventario {
    constructor(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    calcularValorTotal() {
        return this.quantidade * this.preco; // Calcula o valor total do item
    }
}

// Objeto literal inventario contendo vários itens
const inventario = {
    itens: [
        new ItemInventario("Produto A", 10, 5.50),
        new ItemInventario("Produto B", 5, 20.00),
        new ItemInventario("Produto C", 15, 3.75),
    ],

    calcularValorTotalInventario() {
        return this.itens.reduce((total, item) => total + item.calcularValorTotal(), 0);
    }
};

// Testando o inventário e calculando o valor total
console.log("Valor total do inventário: R$" + inventario.calcularValorTotalInventario().toFixed(2));
