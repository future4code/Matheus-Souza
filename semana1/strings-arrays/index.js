//===========Ex interpretação de código=============

//==== ex 1 =======

//let array
//console.log('a. ', array)vai retornar como indefinido a variavel

//array = null
//console.log('b. ', array)vai retornal null 

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length)vai mostrar 11 porque length é pra contar a quantidade de itens da lista

//let i = 0
//console.log('d. ', array[i])da erro porque o 0 nao esta dentro de uma array

//array[i+1] = 19
//console.log('e. ', array)vai da errado

//const valor = array[i+6]
//console.log('f. ', valor)

//========== ex 2 ==========

// SUBI NUM ÔNIBUS EM MARROCOS 
// 26

//=================== Ex de escrita de código============

// =============== ex 1 ===================

/*const nome = prompt("qual seu nome?")
const email = prompt("qual se email?")
cadastro = (`o e-mail ${email} foi cadastrado com sucesso.Seja bem vinda(o) ${nome}`)
console.log(cadastro)*/

//================== ex 2 =====================

/*const comidaFavorita = ["arroz" , "feijão" , "salada" , "carne" , "vagem"]
console.log(comidaFavorita)

console.log(`essas são minhas comidas favoritas
${comidaFavorita[0]}
${comidaFavorita[1]}
${comidaFavorita[2]}
${comidaFavorita[3]}
${comidaFavorita[4]}`)

const userComidaFavorita = prompt("qual sua comida avorita?")
comidaFavorita[1] = userComidaFavorita
console.log(comidaFavorita)*/

//==================== ex 3 =====================
 let listaDeTarefas = []
 listaDeTarefas.push(prompt("digite a preimeira tarefa"))
 listaDeTarefas.push(prompt("quala segunda tarefa do dias?"))
 listaDeTarefas.push(prompt("qual sua terceira tarefa de hoje?"))
 tarefaFeita = prompt["qual tarefa ja fez? 0 , 1 ou 2?"]
console.log(listaDeTarefas)