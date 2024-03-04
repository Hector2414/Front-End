 let images = []/* criando uma lista vazia para guardar as imagens*/

    function carregarImagem(){
        const galeria = document.getElementById("galeria");
        galeria.innerHTML = '';

        images.forEach(imgUrl =>{
            const img = document.createElement("img")
            img.src = imgUrl
            galeria.appendChild(img)
        })
    }

 document.getElementById('arquivos').addEventListener('change', function(event) {
  const arquivo = event.target.files[0];
  const ler = new FileReader();

  ler.onload = function (e) {
    const imgUrl = e.target.result;
    images.push(imgUrl)
    carregarImagem();
    
  }

  ler.readAsDataURL(arquivo)
})