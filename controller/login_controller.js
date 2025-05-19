document.getElementById('botao_entrar').addEventListener('click', ()=>{
    const senha = document.getElementById('usuario_senha').value;

    let senhaCorreta = "mar";
    // se o valor inserido no botao, for o mesmo que a senhaCorreta, voce passa
    if(senha === senhaCorreta){
        alert(`Senha Correta, senha: ${senhaCorreta} `);
    }else{
        alert("Para de tentar roubar os outros, vagabudo");
    }
});