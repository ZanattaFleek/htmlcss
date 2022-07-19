function txtNomeOnClick() {
    console.log('txtNomeOnClick')
}

function txtNomeOnBlur() {
    console.log('txtNomeOnBlur')
}

function txtNomeOnChange() {
    var txtNome = document.getElementById('txtNome')

    console.log(txtNome.value)
    
    txtNome.value = txtNome.value.toUpperCase()

    console.log(txtNome.value)
    // console.log('txtNomeOnChange')
}

function txtEnderecoOnKeyPress() {
    var txtEndereco = document.getElementById('txtEndereco')
    txtEndereco.value = txtEndereco.value.toUpperCase()
}