```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {

const selecionarNumero = (numero) => {
  if (numero === numeroEscolhido) {
    return true
  } else {
    return false
  }
}

let novaArray = arrayDeNumeros.filter(selecionarNumero)

if (novaArray.length > 0) {
  return `O número ${numeroEscolhido} aparece ${novaArray.length}x`
} else {
  return `Número não encontrado`
}
}```