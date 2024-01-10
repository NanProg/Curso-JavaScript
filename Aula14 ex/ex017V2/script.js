let start = document.getElementById('num1')
let passo = document.getElementById('num2')
let end = document.getElementById('num3')
let res = document.getElementById('resposta')

function contar() {
    if (start.value.length == 0 || end.value.length == 0) {
        alert('Dados faltando!')
    } else if (Number(start.value)<Number(end.value)) { //crescente
        if (Number(passo.value) == 0 || passo.value.length == 0) {
            res.innerHTML = ''
            for (let c = Number(start.value);c<=Number(end.value);c++) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            res.innerHTML = ''
            for (let c = Number(start.value);c<=Number(end.value);c+=Number(passo.value)) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    } else if (Number(start.value)>Number(end.value)) { //decrescente
        if (Number(passo.value) == 0 || passo.value.length == 0) {
            res.innerHTML = ''
            for (let c = Number(start.value);c>=Number(end.value);c--) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            res.innerHTML = ''
            for (let c = Number(start.value);c>=Number(end.value);c-=Number(passo.value)) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    } else {
        alert('Início e fim semelhantes...')
    }
    res.innerHTML += '\u{1F3C1}'
}