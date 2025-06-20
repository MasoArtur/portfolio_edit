const apiUrl = "https://back-end-portf-lio.vercel.app/api";

export async function getBdCardsProjects() {
    try {
        const response = await fetch(apiUrl)
        const dados = await response.json(); // o response.json serve para transformar a resposta estranha no formato JSON
        console.log("API:", dados);
        return dados;

    } catch (e) {
        console.log(`ERRO: ${e}`)
        // O ERRO PROVAVELMENTE ESTA POR AQUI, O FETCH NÃO ESTA INDO
    }
};

export async function postBdCardsProjects(titulo, preço, img) {
    try {
        const response = await fetch(apiUrl,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ // o corpo do que vem é convertido para Json
                    titulo: titulo,
                    preço: preço,
                    img: img,
                })
            }
        );
        //COLOCAR CONST
        const dados = await response.json();
        alert(dados.resposta);
    }
    catch (e) {
        console.log(`ERRO: ${e}`)
    }
};

export async function deleteBdCardsProjects(id) {
    try {
        const response = await fetch(`https://back-end-portf-lio.vercel.app/api/${id}`,
            {
                method: "DELETE",
            }
        );
        const dados = await response.json();
        alert(dados.resposta);
    } catch (e) {
        console.log(`ERRO: ${e}`);
    }
};

export async function putBdCardsProjects(id, titulo, preço, img) {
    try {
        const response = await fetch(`${apiUrl}/${id}`,
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ // transforma objetos JS em texto JSON
                    titulo: titulo,
                    preço: preço,
                    img: img,
                })
            },
        );
        const dados = await response.json();// sempre colocar entre paarenteses o JSON, para o "AWAIT" ter efeito
        alert(dados.resposta);
    } catch (e) {
        alert(`ERRO: ${e}`);
    }
};