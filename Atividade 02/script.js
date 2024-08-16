function verificar() {
    const data = new Date();
    let anoAtual = data.getFullYear();
    let input = document.getElementById('ano');
    let sexo = document.querySelector('input[name="RadioSex"]:checked');
    let output = document.getElementById('resultado');
    output.style.textAlign = 'center'
    let idade = anoAtual - input.value;
    let genero = ''
    if (input.value.length == 0 || input.value > anoAtual) {
        alert("INPUT INVÁLIDO");
    
    } else {
        if (sexo.value == "Masculino") {
            genero = 'Homem'

        } else  {
            genero = 'Mulher'
        }
        output.innerHTML = `Identificamos ${genero} com ${idade} anos.`;

    }
    
}
