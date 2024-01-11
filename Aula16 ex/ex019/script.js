let num = document.getElementById('fnum')
let lista = document.getElementById('tab')
let res = document.getElementById('resultado')
let valores = []

function isNumero(n) {
    return Number(n)>=1 && Number(n)<=100

}

function inLista(n, l) {
    return l.indexOf(Number(n))!== -1
}

function adicionar() {
    if(isNumero(num.value) == true && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // Push é usado para adicionar um ou mais elementos ao final de um array
        let item = document.createElement('option')
        item.text = `valor: ${[Number(num.value)]} | Adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('[VALOR] Invalido ou já declarado')
    }
    num.value = ''
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione alguns valores antes de finalizar')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos]>maior) {
                maior = valores[pos]
            }
            if (valores[pos]<menor) {
                menor = valores[pos]
            }
            media += soma / valores.length
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Total de números cadastrados: ${valores.length} </p>`
        res.innerHTML += `<p>Maior valor: ${maior} | Menor valor: ${menor} </p>`
        res.innerHTML += `<p>Soma de todos os valores: ${soma} </p>`
        res.innerHTML += `<p>Média dos valores: ${media} </p>`
    }
}