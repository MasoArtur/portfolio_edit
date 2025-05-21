let bd_cards_comida = [
    {
        nome: "Brigadeiro",
        tipo: "doce",
    },
    {
        nome: "Pudim",
        tipo: "doce",
    },
    {
        nome: "Coxinha",
        tipo: "salgado",
    },
    {
        nome: "Empada",
        tipo: "salgado",

    },
    {
        nome: "Torta de Morango",
        tipo: "doce",
    },
    {
        nome: "Pastel",
        tipo: "salgado",
    },
    {
        nome: "palha-italiana",
        tipo: "doce",
    },
    {
        nome: "bauru",
        tipo: "salgado",
    }
];

function createCardsComida(){
    let cards_comida = document.getElementById('cards');

    for(let i = 0; i > nome.length; i++){

    let cards = document.createElement('div');
    cards.className = 'card_comida';

    let nome_comida = document.createElement('h1');
    nome_comida.textContent = 'titulo_card';
    
    let tipo_comida = document.createElement('p');
    tipo_comida.textContent = "descricao_card";

    cards.appendChild(nome_comida);
    cards.appendChild(tipo_comida);
    cards_comida.appendChild(cards);

    };
}