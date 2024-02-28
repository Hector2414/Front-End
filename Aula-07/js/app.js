//capturar os eventos do formulário
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', function (e) { // a função aguarda o usuario clicar no botão
  e.preventDefault(); //muda o comportamento padrão do formulario que estammos escutando

  const inputPeso = e.target.querySelector('#peso')
  const inputAltura = e.target.querySelector('#altura')


  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)


  const imc = calcularIMC(peso, altura)
  const classificacao = tabelaImc(imc)
  console.log(classificacao)
  mostrarImc (classificacao)


})

//função  para calcular o IMC e retornar o valor do IMC com duas casas decimais
function calcularIMC(peso, altura) {
  let imc = (peso / altura ** 2)//formula do IMC
  return imc.toFixed(2); // formata  o número em duas casa decimais
}

//criar função para mostrar o IMC na tela 
function mostrarImc(msg) {
  const r = document.querySelector("#a");
  console.log(r)
  r.innerHTML = msg;
}
function tabelaImc(imc) {
  const classificacao = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau I', 'obesidade grau II', 'obesidade grau III'];

  if (imc >= 39.9) { return classificacao[5] }
  if (imc >= 34.9) { return classificacao[4] }
  if (imc >= 29.9) { return classificacao[3] }
  if (imc >= 24.9) { return classificacao[2] }
  if (imc >= 18.5) { return classificacao[1] }
  if (imc < 18.5) { return classificacao[0] }

}





