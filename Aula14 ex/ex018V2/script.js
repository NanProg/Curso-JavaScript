let numero = document.getElementById('num')
let tabuada = document.getElementById('tab')
function gerar() {
    tabuada.innerHTML = '' 
    if (numero.value.length == 0) {
        let alerta = document.createElement('option')
        alerta.text = 'Insira algum valor acima na caixa!'
        tabuada.appendChild(alerta)
        alert('[ERRO] Nenhum valor foi adicionado a caixa!')
    } else {
        tabuada.innerHTML = ''
        for(let c=0;c<=10;c++) {
            let valor = document.createElement('option')
            valor.text = `${c} x ${Number(numero.value)} = ${Number(numero.value)*c}`
            tabuada.appendChild(valor)
        }
    }
}