function contagem(){
    var inicio = document.getElementById('txt1')
    var fim = document.getElementById('txt2')
    var passo = document.getElementById('txt3')
    var resp = document.getElementById('contar')
    var inif = Number(inicio.value)
    var fimf = Number(fim.value)
    var passof = Number(passo.value)
    resp.innerHTML = 'Contando <br>'
    if (passof == 0){
        passof = 1
        alert('Não há Passos informados, considerando 1...')
    }
    if (inicio.value.length == 0 || fim.value.length == 0){
        window.alert('[ERRO] Faltou dados!')
        resp.innerHTML = 'Não é possível contar[...]'
    } else if (inif < fimf){ 
        //contagem constante
        for (var c = inif; c <= fimf; c += passof){
            resp.innerHTML += `${c} \u{1F449}`
        }
    } else {
        //contagem regressiva
        for (var c = inif ;c >= fimf ; c -= passof){
            resp.innerHTML += `${c} \u{1F449}`
        }
        
    }
        resp.innerHTML += `\u{1F3C1}`

}