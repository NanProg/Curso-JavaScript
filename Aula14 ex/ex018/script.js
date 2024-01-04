function gerar(){
    var numero = document.getElementById('txt')
    var numint = Number(numero.value)
    var resp = document.getElementById('tabuada')
    if (numero.value.length == 0){
        alert('Informe um número!')
    } else{
        resp.innerHTML = ''
        for (var c = 1;c<=10;c++){
            var item = document.createElement('option')
            item.text = `${numint} x ${c} = ${numint * c}`
            resp.appendChild(item)
        }
    }
}