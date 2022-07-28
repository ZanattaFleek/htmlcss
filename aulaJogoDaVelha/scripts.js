const JOGADOR01 = 'X'
const CORJOGADOR01 = 'red'
const JOGADOR02 = 'O'
const CORJOGADOR02 = 'blue'

var qtdJogadas = 0

var jogadorAtual = JOGADOR01

var matrizJogo = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

/*
matrizJogo[0][0]
matrizJogo[0][1]
matrizJogo[0][2]

matrizJogo[1][0]
matrizJogo[1][1]
matrizJogo[1][2]
*/

function btClick(objBotao, linha, coluna) {

    objBotao.value = jogadorAtual
    matrizJogo[linha][coluna] = jogadorAtual

    objBotao.style = 'background-color:'.concat((jogadorAtual == JOGADOR01) ? CORJOGADOR01 : CORJOGADOR02).concat(';')

    if (jogadorAtual == JOGADOR01)

        objBotao.disabled = true

    if (conferirGanhador()) {
        // alert('O jogador '.concat(jogadorAtual).concat(' ganhou!!!'))
        document.getElementById('txtResultado').innerHTML = 'O jogador '.concat(jogadorAtual).concat(' ganhou!!!')
    } else if (qtdJogadas == 8) {
        document.getElementById('txtResultado').innerHTML = 'Deu Velha!!!!'
    }

    jogadorAtual = (jogadorAtual == JOGADOR01) ? JOGADOR02 : JOGADOR01
    qtdJogadas++

}

function conferirGanhador() {
    return (matrizJogo[0][0] && matrizJogo[0][0] == matrizJogo[0][1] && matrizJogo[0][0] == matrizJogo[0][2])
        || (matrizJogo[1][0] && matrizJogo[1][0] == matrizJogo[1][1] && matrizJogo[1][0] == matrizJogo[1][2])
        || (matrizJogo[2][0] && matrizJogo[2][0] == matrizJogo[2][1] && matrizJogo[2][0] == matrizJogo[2][2])
}


