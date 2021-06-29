
console.log("===========bem vindo ao black jack =================")

if (confirm("você quer jogar??")) {
   jogador = [comprarCarta(), comprarCarta()]
   computador = [comprarCarta(), comprarCarta()]
   pontosComputador = computador[0].valor + computador[1].valor
   pontosJogador = jogador[0].valor + jogador[1].valor
   console.log(`as cartas do usuario sao ${jogador[0].texto} e ${jogador[1].texto} seu pontos são ${pontosJogador}`)
   console.log(`as cartas do computador sao ${computador[0].texto} e ${computador[1].texto} seus pontos foram ${pontosComputador}`)

   if (pontosComputador === pontosJogador) {
      console.log("================ impate ================")
  }else if ( pontosComputador > pontosJogador ){
     console.log("=================== computador venceu ============")
  }else{
     console.log("==================== o jogador venceu ==============")
  }


} else {
   console.log("o jogo acabou")
}
