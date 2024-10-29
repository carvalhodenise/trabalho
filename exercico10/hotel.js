// Classe base Quarto
class Quarto {
    constructor(numero, tipo, preco) {
        this.numero = numero; // Número do quarto
        this.tipo = tipo;     // Tipo do quarto (ex: simples, duplo, suite)
        this.preco = preco;   // Preço do quarto
        this.reservado = false; // Status de reserva
    }

    realizarReserva() {
        if (!this.reservado) {
            this.reservado = true;
            console.log(`Quarto ${this.numero} reservado com sucesso.`);
        } else {
            console.log(`Quarto ${this.numero} já está reservado.`);
        }
    }

    cancelarReserva() {
        if (this.reservado) {
            this.reservado = false;
            console.log(`Reserva do quarto ${this.numero} cancelada com sucesso.`);
        } else {
            console.log(`Quarto ${this.numero} não está reservado.`);
        }
    }

    verificarDisponibilidade() {
        return !this.reservado; // Retorna true se o quarto está disponível
    }

    calcularPreco() {
        return this.preco; // Preço padrão para quartos
    }
}

// Classe QuartoSimples que herda de Quarto
class QuartoSimples extends Quarto {
    constructor(numero) {
        super(numero, "Simples", 100); // Preço fixo para Quarto Simples
    }
}

// Classe SuiteLuxo que herda de Quarto
class SuiteLuxo extends Quarto {
    constructor(numero) {
        super(numero, "Luxo", 300); // Preço fixo para Suite Luxo
    }

    calcularPreco() {
        return this.preco * 1.5; // Aumenta o preço da suíte de luxo em 50%
    }
}

// Classe Hotel
class Hotel {
    constructor(nome, localizacao) {
        this.nome = nome; // Nome do hotel
        this.localizacao = localizacao; // Localização do hotel
        this.quartos = []; // Lista de quartos
    }

    adicionarQuarto(quarto) {
        this.quartos.push(quarto);
        console.log(`Quarto ${quarto.numero} (${quarto.tipo}) adicionado ao hotel ${this.nome}.`);
    }

    verDisponibilidade() {
        console.log(`Disponibilidade dos quartos no hotel ${this.nome}:`);
        this.quartos.forEach(quarto => {
            const status = quarto.verificarDisponibilidade() ? "disponível" : "reservado";
            console.log(`Quarto ${quarto.numero} (${quarto.tipo}): ${status}`);
        });
    }
}

// Testando as classes
const hotel = new Hotel("Hotel Luxo", "Rio de Janeiro");

const quarto1 = new QuartoSimples(101);
const quarto2 = new QuartoSimples(102);
const suite1 = new SuiteLuxo(201);

hotel.adicionarQuarto(quarto1);
hotel.adicionarQuarto(quarto2);
hotel.adicionarQuarto(suite1);

// Verificando a disponibilidade
hotel.verDisponibilidade();

// Realizando uma reserva
quarto1.realizarReserva();

// Verificando a disponibilidade novamente
hotel.verDisponibilidade();

// Cancelando a reserva
quarto1.cancelarReserva();

// Verificando a disponibilidade após o cancelamento
hotel.verDisponibilidade();

// Exibindo preços
console.log(`Preço do Quarto Simples ${quarto1.numero}: R$ ${quarto1.calcularPreco()}`);
console.log(`Preço da Suite Luxo ${suite1.numero}: R$ ${suite1.calcularPreco()}`);
