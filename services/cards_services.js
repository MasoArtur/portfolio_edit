async function getBdCardsProjects(){
    try{
        const response = await fetch('http://localhost:3000/projetos')
        const dados = await response.json();
        return dados;

    }catch(e){
        console.log(`ERRO: ${e}`)
    }   
};

async function postBdCardsProjects(titulo, preco, img){
    try{
        const response = await fetch('http://localhost:3000/projetos',
        {
            method: "Post",
            headers:{
                'Content-Type' : 'application/json'
            },
                body: JSON.stringify({
                    id: id,
            })
        }
    );
    //COLOCAR CONST

    }
    catch(e){
        console.log(`ERRO: ${e}`)
    }
};