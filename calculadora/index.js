var numeroAtual = ""

function digitado ( numero ) {

  numeroAtual = numeroAtual.concat( numero )
  display( numeroAtual )

}

function operacao ( qual ) {

  if (qual == 'decimal' && !numeroAtual.includes('.')) {
    digitado('.')
  }
  
}

function display ( oque ) {
  // console.log( document.getElementById( 'txtDisplay' ).value )
  document.getElementById( 'txtDisplay' ).value = oque
}