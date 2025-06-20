import { createCards } from "../view/js/create_cards.js";
import { postBdCardsProjects, deleteBdCardsProjects, putBdCardsProjects } from "../services/cards_services.js";

document.addEventListener('DOMContentLoaded', () => {
  createCards();
});

  document.getElementById('cadastro_form').addEventListener('submit', async(event)=>{
    event.preventDefault()

    const img_cadastro = document.getElementById('imagem_cadastro').value
    const name_cadastro = document.getElementById('titulo_cadastro').value;
    const preco_cadastro = document.getElementById('preco_cadastro').value;
    // const tel_cadastro = document.getElementById('telefone_cadastro').value;
    // const email_cadastro = document.getElementById('email_cadastro').value;

    if(!img_cadastro || !name_cadastro || !preco_cadastro /*|| !tel_cadastro || !email_cadastro*/){
        alert("Algo de errado, não está certo");
    }else{
        await postBdCardsProjects(img_cadastro, name_cadastro, preco_cadastro,/*  tel_cadastro,email_cadastro*/);
        createCards();
    }
  });


  // document.getElementById('delete_form').addEventListener('submit', async (event)=>{
  //   event.preventDefault()

  //   const delete_algo = document.getElementById('deletar_algo').value;

  //   if(!delete_algo){
  //       alert("Algo de errado, não está certo");
  //   }else{
  //       await deleteBdCardsProjects(delete_algo);
  //       createCards();
  //   }
  // });
  
  document.getElementById('att_form').addEventListener('submit', async (event)=>{
    event.preventDefault()

    const novo_nome = document.getElementById('novo_nome').value;
    const novo_cpf = document.getElementById('novo_cpf').value;
    const id_att = document.getElementById('novo_id').value
    const img_att = document.getElementById('imagem_att').value


    if(!novo_nome || !novo_cpf || !id_att || !img_att){
        alert("Algo de errado, não está certo");
    }else{
        await putBdCardsProjects(id_att, novo_nome, novo_cpf, img_att);
        createCards();
    }
  });
  