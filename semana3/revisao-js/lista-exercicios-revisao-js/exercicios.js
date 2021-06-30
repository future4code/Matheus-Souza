// EXERCÍCIO 01
function inverteArray(array) {
  const inverte = []
  for (let i = array.length - 1; i >= 0; i--) {
    inverte.push(array[i])
  }
  return inverte
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let dobro = []
  for (num of array) {
    if (num % 2 === 0) {
      dobro.push(num * num)
    }
  }
  return dobro

}

// EXERCÍCIO 03

function retornaNumerosPares(array) {
  pares = []
  for (num of array)
    if (num % 2 === 0) {
      pares.push(num)
    }
  return pares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for (num of array) {
    if (maiorNumero < num) {
      maiorNumero = num
    }
  }
  return maiorNumero
}


// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  let respostas = [booleano1 && booleano2 && !booleano4,
  (booleano1 && booleano2) || !booleano3,
  (booleano2 || booleano3) && (booleano4 || booleano1),
  !(booleano2 && booleano3) || !(booleano1 && booleano3),
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const novoArray = []
  for (let i = 0; novoArray.length < n; i++) {
    if (i % 2 == 0) {
      novoArray.push(i)
    }
  }
  return novoArray
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if (a === b && a === c && b === c) {
    return 'Equilátero'
  } else if (a === b || a === c || c === b) {
    return 'Isósceles'
  } else if (a !== b && a !== c && c !== b) {
    return 'Escaleno'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor

  if (num1 > num2) {

    maiorNumero = num1
    menorNumero = num2

  } else {

    maiorNumero = num2
    menorNumero = num1

  }

  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

  const diferenca = maiorNumero - menorNumero

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  }

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let menor = Infinity
  let maior = - Infinity
  let segundoMenor = Infinity
  let segundoMaior = - Infinity
  let novoArray = []

  for (num of array) {
    if (num < menor) {
      menor = num
    }
    if (num > maior) {
      maior = num
    }
  }

  for (num of array) {
    if (num < segundoMenor && num !== menor) {
      segundoMenor = num
    }
    if (num > segundoMaior && num !== maior) {
      segundoMaior = num
    }
  }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
}

// EXERCÍCIO 12
function filmeFavorito() {
  filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  return filme
}


// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  return {
    ...pessoa,
    nome: 'ANÔNIMO'
  }
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const novoArray = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 18
  })
  return novoArray
}
// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const novoArray = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade < 18
  })
  return novoArray
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const novoArray = array.map((num) => {
    return num * 2 
  })
  return novoArray
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
