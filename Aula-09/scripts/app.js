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

    function clicarImagem(){
      const imagemMiniautura = document.querySelectorAll('#galeria img');

      imagemMiniautura.forEach(imagemMiniautura =>{

        imagemMiniautura.addEventListener('click',function(){
          const imagemGrande = document.createElement('img');
          imagemGrande.src = this.src;
          imagemGrande.classList.add('imagem-grande');
          document.getElementById('imagem-grande-container').innerHTML = '';
          document.getElementById('imagem-grande-container').appendChild(imagemGrande)
        })
      })
    }

 document.getElementById('arquivos').addEventListener('change', function(event) {
  const arquivo = event.target.files[0];
  const ler = new FileReader();

  ler.onload = function (e) {
    const imgUrl = e.target.result;
    images.push(imgUrl)
    carregarImagem();
    clicarImagem();
    
  }

  ler.readAsDataURL(arquivo)
})