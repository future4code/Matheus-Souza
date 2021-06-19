// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
//function soma(num1, num2) {
// return num1 + num2
//}
//console.log(soma(1,2))
//
// EXERCÍCIO 0B
//function imprimeMensagem() {
//  const mensagem = prompt('Digite uma mensagem!')

//  console.log(mensagem)
//}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura =Number(prompt("digite a altura"))
  let largura=Number(prompt("qual largura?"))
  const area = altura * largura
  console.log(area)
   return area
   
}
//calculaAreaRetangulo()

// EXERCÍCIO 02

function imprimeIdade() {
  let anoAtual = Number(prompt("em que ano estamos?"))
  let anoDeNascimento = Number (prompt("em que ano você nasceu?"))
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
  return idade
}
//imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  imc = peso / (altura * altura)
  console.log(imc)
   return imc
}
//calculaIMC(85., 1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt ("qual seu nome?")
  let idade =Number (prompt ("qual sua idade?"))
  let email = prompt ("qual seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}
//imprimeInformacoesUsuario()


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
 cor1 = prompt("digite sua cor favorita")
 cor2 = prompt("digite sua segunda cor favorita")
 cor3 = prompt("digite sua terceira cor favorita")
 console.log([cor1,cor2,cor3])

}
//imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
   let maiuscula = string.toUpperCase()
   return maiuscula

}
//retornaStringEmMaiuscula("matheus")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let lucro = custo  / valorIngresso
  return lucro

}
//calculaIngressosEspetaculo(3000,100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
   let tamanho1 = string1.length
   let tamanho2 = string2.length
   tamanho = tamanho1 === tamanho2
   console.log(tamanho)
   
   return tamanho
}
//checaStringsMesmoTamanho(

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array [0]
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array [array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = retornaPrimeiroElemento(array)
  const ultimo = retornaUltimoElemento(array)

  array[0] = ultimo
  array[array.length -1] = primeiro
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 return  string1.toLowerCase() === string2.toLowerCase()

}
checaIgualdadeDesconsiderandoCase("ola","olA") 


// EXERCÍCIO 13
function checaRenovacaoRG() {

 const anoAtual = Number(prompt("em que ano estamos?"))
 const anoDeNascimento = Number(prompt("qual seu ano de nascimento?"))
 const carteiraEmitida= Number(prompt("em que ano sua identidade foi emitida?"))
 
 const idade = anoAtual-anoDeNascimento
 const idadeRg = anoAtual - carteiraEmitida

 const jovem = idade <=20 && idadeRg>=5
 const adulto = idade >20 && idade<=50 && idadeRg>=10
 const idoso = idade >50 && idadeRg >=15

 const trocarCarteira = jovem || adulto || idoso
 
 console.log(trocarCarteira)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const cond1= ano % 400 === 0
  const cond2 = (ano % 4 === 0) && (ano % 100 !==0)
  return cond1 || cond2 

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const cond1 = prompt("você tem mais de 18 anos ?")
  const cond2 = prompt("você possui ensino médio completo?")
  const cond3 = prompt("você possui disponibilidade para estudar o dia todo?")
  console.log(cond1 === "sim" && cond2 === "sim" && cond3 === "sim")
}