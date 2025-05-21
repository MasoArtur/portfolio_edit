document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('cadastro_form').addEventListener('submit', (event)=>{
    event.preventDefault()

    const name_cadastro = document.getElementById('nome_cadastro').value;
    const cpf_cadastro = document.getElementById('cpf_cadastro').value;
    const tel_cadastro = document.getElementById('telefone_cadastro').value;
    const email_cadastro = document.getElementById('email_cadastro').value;

    if(!name_cadastro || !cpf_cadastro || !tel_cadastro || !email_cadastro){
        alert("Algo de errado, não está certo");
    }else{
        alert(`nome: ${name_cadastro}, cpf: ${cpf_cadastro}, telefone: ${tel_cadastro}, email: ${email_cadastro}`);
    }
  });


  document.getElementById('delete_form').addEventListener('submit', (event)=>{
    event.preventDefault()

    const delete_algo = document.getElementById('deletar_algo').value;

    if(!delete_algo){
        alert("Algo de errado, não está certo");
    }else{
        alert(`deletou isso: ${delete_algo}`);
    }
  });


  document.getElementById('att_form').addEventListener('submit', (event)=>{
    event.preventDefault()

    const novo_nome = document.getElementById('novo_nome').value;
    const novo_cpf = document.getElementById('novo_cpf').value;
    const novo_telefone = document.getElementById('novo_telefone').value;
    const novo_email = document.getElementById('novo_email').value;

    if(!novo_nome || !novo_cpf || !novo_telefone || !novo_email){
        alert("Algo de errado, não está certo");
    }else{
        alert(`nomeatt: ${novo_nome}, cpfatt: ${novo_cpf}, telefoneatt: ${novo_telefone}, emailatt: ${novo_email}`);
    }
  });

});