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
      console.log(num * num)
      console.log(dobro)
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
      console.log(pares)
    }
  return pares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  maior = 0
  for (num of array) {
    if (num < maior) {
      num = maior
    }
  }
  return maior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  for (num of array) {
    console.log(num)
  }
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
  pares = n % 2 === 0
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
  if (num1 > num2) {
    MaiorNumero = num1
    console.log("maior é ", MaiorNumero)

  } else if (num2 > num1) {
    MaiorNumero = num2
    console.log("maior é ", MaiorNumero)
  }
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  novoArray = []
  segundoMaior
  segundoMenor
  for (num of array) {

  }
}

// EXERCÍCIO 11
function ordenaArray(array) {
  novoArray = []


}

// EXERCÍCIO 12
function filmeFavorito() {
  filmes = {
    nome: 'O Diabo Veste Prada',
    ano: Number(2006),
    diretor: 'David Frankel',
    atores:['Meryl Streep', ' Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
  }
  return filmes
}


// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  largura = lado1 
  altura = lado2
  perimetro = 2 * (lado1 + lado2)
  area = lado1 * lado2
  return {largura,altura,perimetro,area}
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  let  individuo = {
    nome: "matheus",
    idade: 25,
    email: "astrodev@labenu.com.br",
    endereco: "Rua do Futuro, 4"
  }
  let novoArray ={...individuo,nome:'ANÔNIMO '} 
  return novoArray
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
const nomes =[
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 } 
  ]
  let apenasDeMaiores =nomes.map(nomes.idade >=18 )
  return apenasDeMaiores

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

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
