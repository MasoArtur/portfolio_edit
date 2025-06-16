const apiUrl = "https://back-end-portf-bu8g6dow1-masoarturs-projects.vercel.app/api";

export async function getBdCardsProjects(){
    try{
        const response = await fetch(apiUrl)
        const dados = await response.json(); // o response.json serve para transformar a resposta estranha no formato JSON
        console.log("API:", dados);  
        return dados;

    }catch(e){  
        console.log(`ERRO: ${e}`)    
// O ERRO PROVAVELMENTE ESTA POR AQUI, O FETCH NÃO ESTA INDO
    }       
};

export async function postBdCardsProjects(titulo, preco, img){
    try{
        const response = await fetch(apiUrl,
        {
            method: "POST",
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
        const response = await fetch(apiUrl,
            {
            method: "DELETE",
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
        const response = await fetch(apiUrl,
           {
            method: "PUT",
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