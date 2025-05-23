

function createCardsComida(){
    let cards_comida = document.getElementById('cards');
    cards_comida.innerHTML = "";

    for(let i = 0; i > nome.length; i++){

    let cards = document.createElement('div');
    cards.className = 'card_comida';

    let img_card = document.createElement('img');
    img_card.className = 'img_card'

    let nome_comida = document.createElement('h1');
    nome_comida.textContent = 'titulo_card';
    
    let tipo_comida = document.createElement('p');
    tipo_comida.textContent = "descricao_card";

    cards.appendChild(img_card);
    cards.appendChild(nome_comida);
    cards.appendChild(tipo_comida);
    cards_comida.appendChild(cards);

    };
}