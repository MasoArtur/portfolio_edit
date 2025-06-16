import { getBdCardsProjects } from "../../services/cards_services.js";


export async function createCards(){
    let section_cards = document.getElementById('cards');
    section_cards.innerHTML = "";

    const bd_cards_projetos = await getBdCardsProjects();

    bd_cards_projetos.map((card_bd, index) => {

        let cards = document.createElement('div');
        cards.className = 'card_comida';

        let img_card = document.createElement('img');
        img_card.src = card_bd.img;

        let titulo_card = document.createElement('h1');
        titulo_card.textContent = card_bd.titulo;
        
        let preco_card = document.createElement('p');
        preco_card.textContent = card_bd.preco;

        cards.appendChild(img_card);
        cards.appendChild(titulo_card);
        cards.appendChild(preco_card);

        section_cards.appendChild(cards);
    });
}