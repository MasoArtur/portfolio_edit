import { deleteBdCardsProjects, getBdCardsProjects,} from "../../services/cards_services.js";


export async function createCards(){
    let section_cards = document.getElementById('cards');
    section_cards.innerHTML = "";

    const bd_cards_projetos = await getBdCardsProjects();
    

    bd_cards_projetos.map((card_bd, index) => {

        let cards = document.createElement('div');
        cards.className = 'card_comida';

        let img_card = document.createElement('img');
        img_card.className = 'img_card';
        img_card.src = card_bd.img;

        let titulo_card = document.createElement('h1');
        titulo_card.className = 'titulo_card';
        titulo_card.textContent = card_bd.titulo;
        
        let preco_card = document.createElement('p');
        preco_card.className = 'preco_card'
        preco_card.textContent = card_bd.preço;

        let divBtns = document.createElement('div');
        divBtns.className = 'divBtns';

        let btnDeletar = document.createElement('button');
        btnDeletar.className = 'btnDeletar';
        btnDeletar.addEventListener('click', async ()=>{
            await deleteBdCardsProjects(card_bd.id);
            createCards();
        });

        let btnAtualizar = document.createElement('button');
        btnAtualizar.className = 'btnAtualizar';
        btnAtualizar.addEventListener('click', ()=>{
            let buscarId = document.getElementById('novo_id');
            buscarId.value = card_bd.id;
        });

        let iconeDelete = document.createElement('i');
        iconeDelete.className = 'fa-solid fa-trash';

        let iconeAtt = document.createElement('i');
        iconeAtt.className = 'fa-solid fa-rotate';

        btnDeletar.appendChild(iconeDelete);
        btnAtualizar.appendChild(iconeAtt);

        divBtns.appendChild(btnDeletar);
        divBtns.appendChild(btnAtualizar);

        cards.appendChild(img_card);
        cards.appendChild(titulo_card);
        cards.appendChild(preco_card);
        cards.appendChild(divBtns);

        section_cards.appendChild(cards);
    });
}