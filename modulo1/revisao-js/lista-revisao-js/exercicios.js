// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function (a, b) { return a - b })

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayOfPairs = []
    for (num of array) {

        if (num % 2 === 0) {

            arrayOfPairs.push(num)

        }

    }

    return arrayOfPairs

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayOfPairsRaisedTwo = []
    for (num of array) {

        if (num % 2 === 0) {

            arrayOfPairsRaisedTwo.push(num * num)

        }

    }

    return arrayOfPairsRaisedTwo

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for (num of array) {

        if (num > maior) {
            maior = num
        }
    }
    return maior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

   let bigger = 0
   let small = 0

    if(num1 > num2){
        bigger = num1
        small = num2
    }else{
        bigger = num2
        small = num1
    }
   
    let divisivel = bigger % small == 0
   
    let difference = bigger - small 

    return{
        maiorNumero :bigger,
        maiorDivisivelPorMenor:divisivel,
        diferenca:difference
    } 

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}