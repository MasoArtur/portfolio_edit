export async function getBdCardsProjects(){
    try{
        const response = await fetch('https://back-end-portf-bu8g6dow1-masoarturs-projects.vercel.app/api')
        const dados = await response.json(); // o response.json serve para transformar a resposta estranha no formato JSON
        return dados;

    }catch(e){
        console.log(`ERRO: ${e}`)
    }   
};

export async function postBdCardsProjects(titulo, preco, img){
    try{
        const response = await fetch('https://back-end-portf-bu8g6dow1-masoarturs-projects.vercel.app/api',
        {
            method: "Post",
            headers:{
                'Content-Type' : 'application/json'
            },
                body: JSON.stringify({ // o corpo do que vem é convertido para Json
                    titulo: titulo,
                    preco: preco,
                    img: img,
            })
        }
    );
    //COLOCAR CONST
        const dados = await response.json();
        alert(dados.response);
    }
    catch(e){
        console.log(`ERRO: ${e}`)
    }
};


export async function deleteBdCardsProjects(id){
    try{
        const response = await fetch('https://back-end-portf-bu8g6dow1-masoarturs-projects.vercel.app/api',
            {
            method: "Delete",
            headers:{
                'Content-Type' : 'application/json'
            },
                body: JSON.stringify({
                    id: id,
            })
        }
    );
    const dados = await response.json();
    alert(dados.response);
    }catch(e){
        console.log(`ERRO: ${e}`);
    }
};

export async function putBdCardsProjects(id, titulo, preco, img){
    try{
        const response = await fetch('https://back-end-portf-bu8g6dow1-masoarturs-projects.vercel.app/api',
           {
            method: "Put",
            headers:{
                'Content-Type' : 'application/json'
                },
                body: JSON.stringify({ // transforma objetos JS em texto JSON
                    id: id,
                    titulo: titulo,
                    preco: preco,
                    img: img,
                })
            },  
        );
        const dados = await response.json();// sempre colocar entre paarenteses o JSON, para o "AWAIT" ter efeito
        dados(response.json);
    }catch(e){
        alert(`ERRO: ${e}`);
    }
};