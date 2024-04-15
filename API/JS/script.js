const url = 'https://rickandmortyapi.com/api/character';
const imagem = document.querySelector(".imagem");

function rickMorty (){
    fetch( url,{
        method: 'GET',
    }).then((resposta) => resposta.json())
    .then((dados) => {
        console.log(dados)
    })

}


rickMorty();

function imprimirDados (dados){
    dados.results.forEach(element => {
       imagem.innerHTML = `"<img src = https://rickandmortyapi.com/api/character/avatar${element.id}.jpeg>"` 
    });

}

imprimirDados();