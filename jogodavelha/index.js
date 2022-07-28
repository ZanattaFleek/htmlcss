var jogo = [['0,0', '0,1', '0,2'], ['1,0', '1,1', '1,2'], ['2,0', '2,1', '2,1']]

console.log(jogo.length)

const JOGADOR01 = "X"
const JOGADOR02 = "O"

var jogadorAtual = JOGADOR01

function btClick(linha, coluna, elemento) {
  jogo[linha][coluna] = jogadorAtual
  elemento.value = jogadorAtual
  if (testarGanhador()) {
    alert('Jogador '.concat(jogadorAtual).concat(' venceu!'))
  } else {
    jogadorAtual = jogadorAtual == JOGADOR01 ? JOGADOR02 : JOGADOR01
  }
}

function testarGanhador() {
  return (
    temGanhador([0, 0], [0, 1], [0, 2])
    || temGanhador([1, 0], [1, 1], [1, 2])
    || temGanhador([2, 0], [2, 1], [2, 2])
    || temGanhador([0, 0], [1, 0], [2, 0])
    || temGanhador([0, 1], [1, 1], [2, 1])
    || temGanhador([0, 2], [1, 2], [2, 2])
    || temGanhador([0, 0], [1, 1], [2, 2])
    || temGanhador([0, 2], [1, 1], [2, 0])
  )
}

function temGanhador(lc01, lc02, lc03) {
  var retorno = (jogo[lc01[0]][lc01[1]] == jogo[lc02[0]][lc02[1]] && jogo[lc01[0]][lc01[1]] == jogo[lc03[0]][lc03[1]])
  return retorno
}


