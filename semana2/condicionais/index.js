//----------------------interpretação de código---------------
//
//........................ EX 1 ..............................
//
//A)saber se um número é par
//B)numeros pares
//C)ímpares?
//
//........................ EX 2 ..............................
//
//A)para consultar o preço de determinada fruta
//B)2.25
//C)5.5 e 5
//
//........................ EX 3 ..............................
//
//A)guardando um numero const do prompt
//B)esse número passou no teste e se for <0 não mostrara nada
//C)nao vai mostrar na tela a let mensagem porque ela esta no escopo do if e só poderia ser exibida se o console.log estivesse dentro do if
//
//---------------------- escrita de código---------------
//
//........................ ex 1 ..............................

/*const idade = Number(prompt("qual sua idade?"))

if (idade>=18){
    console.log("você ja pode dirigir")  
}else{
    console.log("você não pode dirigir")
}*/
//
//........................ ex 2 ..............................
//
/*const turno = prompt("em qual turno você estuda?M(matutino),V(vespertino),N(noturno)?")
 if(turno=== "m") {
     console.log("bom dia")
 }else if (turno=== "v"){
 console.log("boa tarde")
 }else if (turno === "n"){
 console.log("boa noite")
 }else{
    console.log("nao entendi siga os passos abaixo")
    console.log("digite apena a letra m para matutino")
    console.log("digite apenas v para vespertino")
    console.log("digite apenas n para noturno")
 }*/
//........................ ex 3 ..............................

/*const turno = prompt("em qual turno você estuda?M(matutino),V(vespertino),N(noturno)?")
 switch(turno) {
     case "m":
     console.log("bom dia")
     break
     case "v":
     console.log("boa tarde")
     break
     case "n":
     console.log("boa noite")
     break
     default :
     console.log("nao entendi siga os passos abaixo")
     console.log("digite apena a letra m para matutino")
     console.log("digite apenas v para vespertino")
     console.log("digite apenas n para noturno")
     break

 }*/

 //........................ ex 4 ..............................
 
 const genero = (prompt("qual genero do filme?"))
 const preco =Number(prompt("qual prco do ingresso?"))

if (genero === "fantasia" && preco <15){
    console.log("bom filme")
}else{
    console.log("escolha outro filme")
}


















