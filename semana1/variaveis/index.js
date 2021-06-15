/* questao 1 
10
10 5*/ 

/* questao 2 
10 20 underfined*/ 

/*questao 3
let horasDia= prompt("Quantas horas você trabalha por dia?")
let salarioDia= prompt("quanto você recebe por dia?")
alert(`Voce recebe ${salarioDia/horasDia} por hora`)
*/

/*let nome 
let idade 
typeof nome
typeof idade
 console.log(idade,nome)*/
 /*foi impresso underfined isso significa que nada foi atribuido a variável*/

 /*let nome = prompt ("qual seu nome?")
 let idade=prompt ("qual sua idade")
 console.log(nome)
 console.log(idade)
 console.log(typeof nome)
 console.log(typeof idade)*/
/*os dois valores sao do tipo string*/

/*let nome = prompt("qual seu nome?")
let idade = prompt("qual sua idade?")
console.log("ola",nome,"você tem",idade,"anos de idade")*/

/*let pergunta1 =("você gosta de programar?")
let pergunta2 =("você gosta de futebol?")
let pergunta3 =("você é uma formiga?")
let pergunta1r = ("SIMMM")
let pergunta2r = ("SIM")
let pergunta3r = ("NÃO")
console.log(pergunta1 + pergunta1r)
console.log(pergunta2 + pergunta2r)
console.log(pergunta3 + pergunta3r)*/

let a = 10
let b = 25
let c 
c = b 
b = a 
a = c

console.log(a,b,c)
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


let n1 =prompt("digite o primeiro numero")
let n2 = prompt("digite o segundo numero")
let soma =(parseInt(n1) + parseInt(n2))/*não consegui somar de outra forma que não fosse com parseint,tentei passar os valores de n1 e n2 para number()mas não deu certo*/
let multiplica = n1*n2
console.log(typeof n1)
console.log(soma,multiplica)
console.log("a soma do número",n1,"com o número",n2,"é",soma)
console.log("a multiplicação do número",n1,"com o número",n2,"é",multiplica)

