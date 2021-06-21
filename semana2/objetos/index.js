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

//apresentacao (pessoaNova)

////--------------------------- EX 2 -------------------------

const pessoa1 = {
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
//console.log(retornaArray (pessoa1))
//console.log(retornaArray(pessoa2))
//--------------------------- EX 3 -------------------------
let carrinho =[]

const fruta1 = {
    nome : "banana",
    disponibilidade : true
}
const fruta2 = {
    nome : "melancia",
    disponibilidade : true 
}
const fruta3 = {
    nome : "uva",
    disponibilidade : true
}
function sacola(fruta1,fruta2,fruta3){
  carrinho.push(fruta1,fruta2,fruta3)
   
}
sacola(fruta1,fruta2,fruta3)
console.log(carrinho)