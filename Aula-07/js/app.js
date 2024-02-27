//capturar os eventos do formulário
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', function(e){ // a função aguarda o usuario clicar no botão
e.preventDefault(); //muda o comportamento padrão do formulario que estammos escutando

    const inputPeso = e.target.querySelector('#peso')
     const inputAltura = e.target.querySelector('#altura')
    
    
     const peso = Number(inputPeso.value)
   const altura = Number(inputAltura.value)

   const imc = calcularIMC(peso, altura)
   


   alert("seu IMC é: " + imc)
   //console.log(imc)
    
   
 /*  
   if(imc > 30){
alert('você está obeso')
}else if(imc => 18 || imc  24)
})
*/
//função  para calcular o IMC e retornar o valor do IMC com duas casas decimais
function calcularIMC(peso,altura){
    let imc = (peso / altura **2)//formula do IMC
    return imc.toFixed(2); // formata  o número em duas casa decimais
}
