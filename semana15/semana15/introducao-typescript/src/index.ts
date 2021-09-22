//----------------------------------------Exercício 1 --------------------------------------------------------
//A)aparece um erro pois não aceito numeros em variaveis do tipo string
//B)declarando number|string
//C)
/* type pessoa={
    nome:string,
    idade:number,
    corFavorita:string
}

//D) 
enum cores{
    vermelho="vermelho",
    laranja="laranja",
    amarelo="amarelo",
    verde="verde",
    azul="zul",
    anil="anil",
    violeta="violeta",
}

const pessoa1:pessoa={
    nome:"marcos",
    idade:31,
    corFavorita:cores.azul
}

const pessoa2:pessoa={
    nome:"vini",
    idade:40,
    corFavorita:cores.amarelo
}

const pessoa3:pessoa={
    nome:"pedro",
    idade:81,
    corFavorita:cores.verde
}

const pessoas:pessoa[]=[pessoa1,pessoa2,pessoa3]

console.table(pessoas) */

//----------------------------------------Exercício 2 --------------------------------------------------------
//A)


function obterEstatisticas(numeros:number|any) {

    const numerosOrdenados = numeros.sort(
        (a:any, b:any) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
//B)não consegui essa
