document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('botao_entrar').addEventListener('click', () => {
    const senha = document.getElementById('usuario_senha').value;

    let senhaCorreta = "mar";

    if (senha === senhaCorreta) {
      alert(`Senha Correta, senha: ${senhaCorreta}`);
      console.log("acertou");
    } else {
      alert("Para de tentar roubar os outros, vagabudo");
      console.log("errou");
    }
  });
});
