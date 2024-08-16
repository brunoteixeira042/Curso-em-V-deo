
function Tabuada() {
    let numero = document.getElementById('numero')
    let caixa = document.getElementById('caixa')
    if (numero.value.length !== 0) {
        j = Number(numero.value)
        caixa.innerHTML =" "
        for (i = 0; i <= 10; i++) {
            item = document.createElement("option")
            item.text = `${j}x${i} = ${Number(j) * Number(i)}\n`
            caixa.appendChild(item)
        }
    } else {
        alert("O digite um número")
    }
}