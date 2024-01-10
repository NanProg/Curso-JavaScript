let start = document.getElementById('num1')
let passo = document.getElementById('num2')
let end = document.getElementById('num3')
let res = document.getElementById('resposta')

function contar() {
    if (start.value.length == 0 || end.value.length == 0) {
        alert('Dados faltando!')
    } else if (Number(start.value)<Number(end.value)) {
        if (Number(passo.value) == 0 || passo.value.length == 0) {
            let vf = Number(start.value)
            while (Number(start.value)<=Number(end.value)) {
                vf++
                res.innerHTML += `${vf}...`
            }
        } else {
            alert(`passo: ${Number(passo.value)}`)
        }
    } else if (Number(end.value)<Number(start.value)){
        if (Number(passo.value) == 0 || passo.value.length == 0) {
            alert('passo 0 será -1')
        } else {
            alert(`passo: -${Number(passo.value)}`)
        }
    }
}