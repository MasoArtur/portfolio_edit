import { createCards } from "../view/js/create_cards.js";
import { postBdCardsProjects, deleteBdCardsProjects, putBdCardsProjects } from "../services/cards_services.js";

document.addEventListener('DOMContentLoaded', () => {
  createCards();
});

  document.getElementById('cadastro_form').addEventListener('submit', async(event)=>{
    event.preventDefault()

    const name_cadastro = document.getElementById('nome_cadastro').value;
    const cpf_cadastro = document.getElementById('cpf_cadastro').value;
    const tel_cadastro = document.getElementById('telefone_cadastro').value;
    const email_cadastro = document.getElementById('email_cadastro').value;

    if(!name_cadastro || !cpf_cadastro || !tel_cadastro || !email_cadastro){
        alert("Algo de errado, não está certo");
    }else{
        await postBdCardsProjects(name_cadastro, cpf_cadastro, tel_cadastro, email_cadastro);
        createCards();
    }
  });


  document.getElementById('delete_form').addEventListener('submit', async (event)=>{
    event.preventDefault()

    const delete_algo = document.getElementById('deletar_algo').value;

    if(!delete_algo){
        alert("Algo de errado, não está certo");
    }else{
        await deleteBdCardsProjects(delete_algo);
        createCards();
    }
  });
  
  document.getElementById('att_form').addEventListener('submit', async (event)=>{
    event.preventDefault()

    const novo_nome = document.getElementById('novo_nome').value;
    const novo_cpf = document.getElementById('novo_cpf').value;
    const novo_telefone = document.getElementById('novo_telefone').value;
    const novo_email = document.getElementById('novo_email').value;
    const id_att = document.getElementById('novo_id').value

    if(!novo_nome || !novo_cpf || !novo_telefone || !novo_email || !id_att){
        alert("Algo de errado, não está certo");
    }else{
        await putBdCardsProjects(novo_nome, novo_cpf, novo_telefone, novo_email, id_att);
    }
  });
  