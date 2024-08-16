let array = []
function taNaLista(array, numero) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == numero) {
            return true
        }

    } return false
}

function isnumero(numero) {
    if (!isNaN(numero) && numero >= 1 && numero <= 100) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    let numero = document.getElementById('numero')
    let caixa = document.getElementById('caixa')

    let valor = Number(numero.value)

    if (valor !== " " && isnumero(valor) && !taNaLista(array, valor)) {
        array.push(valor)
        let item = document.createElement('option');
        item.innerHTML = `o valor ${valor} foi adicionado`;
        caixa.append(item)
        numero.value = " "
    } else {
        alert("Digite um número válido ou o número já está na lista");
    }

}
function finalizar() {
    resultado = document.getElementById('res')
    if (array.length === 0) {
        alert("adicione números ante de finalizar")
    }
    let maior = array[0]
    let menor = array[0]
    let soma = 0
    let media = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        } else if (menor <= array[i]) {
            menor[i] = array[i]
        }
        soma += array[i]
        total = array.length
        media = soma / total
    }
    resultado.innerHTML = ''
    resultado.innerHTML += `<p>total de números ${total}</p>`
    resultado.innerHTML += `<p>Menor número ${menor}</p>`
    resultado.innerHTML += `<p>Maior número ${maior}</p>`
    resultado.innerHTML += `<p>Soma dos números ${soma}</p>`
    resultado.innerHTML += `<p>media dos números ${media}</p>`

}