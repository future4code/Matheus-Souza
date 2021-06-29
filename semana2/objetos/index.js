//################## interpretação de código #############
//--------------------------- EX 1 -----------------------
//
//matheus nachtergaele
//virginia cavendish
//vai mostrar canal globo , horario 14h
//
//--------------------------- EX 2 -----------------------
//
//A)--console.log(cachorro) nome:"juca",idade:"3", raca "SRD"
//--console.log(gato) nome:juba e o resto igual ao cachorro
//--console.log(tartaruga)é igual ao gato mas nome é jubo
//
//B)--Os 3 pontos servem para replicar outro objeto
//
//--------------------------- EX 3 -----------------------
//
//A)--false e undefined
//B)--apareceu false porque éra o valor oque tinha na chave backender dentro do objeto pessoa
//apareceu undefined porque nao existe altura definida em lugar nenhum
//
////################## escrita de código ###################
//--------------------------- EX 1 -------------------------
/* 
const pessoa = {
    nome : "matheus",
    apelidos :["caneludo","canela oca","buxo furado"]
}

function  apresentacao (pessoa) {
    console.log(`meu nome é ${pessoa.nome} mas pode me chamar de ${pessoa.apelidos}`)
}
const pessoaNova={ ...pessoa, 
    apelidos:["mercadeiro","chimia","baby shark"]
}

apresentacao (pessoaNova) */

////--------------------------- EX 2 -------------------------

/* const pessoa1 = {
    nome :"matheus",
    idade : 21 ,
    profissao :"web developer",
}
const pessoa2 = {
    nome : "pedro",
    idade : 59,
    profissao :"pedreiro" 
}

function retornaArray(mostra){
    return [mostra.nome,
    mostra.nome.length,
    mostra.idade,
    mostra.profissao,
    mostra.profissao.length,
    ]
}
console.log(retornaArray (pessoa1))
console.log(retornaArray(pessoa2)) */
//--------------------------- EX 3 -------------------------
//
/* let carrinho = []

fruta1 = {
    nome :"banana" ,
    disponibilidade : true
}
fruta2 = {
    nome :"uva" ,
    disponibilidade : true
}
fruta3 = {
    nome :"melancia" ,
    disponibilidade : true
}

const colocaNaArray = (fruta1,fruta2,fruta3) => {
  carrinho.push(fruta1,fruta2,fruta3)
}
colocaNaArray(fruta1,fruta2,fruta3)
console.log(carrinho) */


//============================== desafio ===============

//1)
const apresentacao = ()=>{
let nome = prompt("qual seu nome?")
let idade = prompt("qual sua idade?")
let profissao = prompt("qual sua profissão?")
let dados = { nome,idade,profissao }
return dados
}

//console.log(apresentacao())

//2)

const filmes = ()=>{
    filme1 = {nome:"matrix", ano:1999},
    filme2 = {nome:"dead pool", ano:1016}
    console.log(`o primeiro filme foi lançado antes do segundo ?${filme1.ano>filme2.ano}`)
    console.log(`o primeiro filme foi lançado no mesmo ano que o segundo?${filme1.ano===filme2.ano}`)
}
//filmes()

//3) 
let carrinho = []

fruta1 = {
    nome :"banana" ,
    disponibilidade : false
}
fruta2 = {
    nome :"uva" ,
    disponibilidade : true
}
fruta3 = {
    nome :"melancia" ,
    disponibilidade : true
}

const colocaNaArray = (fruta1,fruta2,fruta3) => {
  carrinho.push(fruta1,fruta2,fruta3)
  console.log(carrinho)
}
colocaNaArray(fruta1,fruta2,fruta3)

const controleDeFrutas = (fruta)=>{
    let disponivel = !fruta1.disponibilidade
   return disponivel
}
console.log(controleDeFrutas(fruta1))
