function somar() {
    var numero01 = document.getElementById('txtNumero01')
    var numero02 = document.getElementById('txtNumero02')

    //console.log('Numero01: ', numero01.value)
    //console.log('Numero02: ', numero02.value)

    var txtSoma = document.getElementById('txtSoma')

    var Soma = parseFloat(numero01.value) + parseFloat(numero02.value)

    txtSoma.value = Soma
}