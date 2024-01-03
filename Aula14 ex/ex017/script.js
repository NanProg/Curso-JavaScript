function contar(){
    var nstart = document.getElementById('txt1')
    var nend = document.getElementById('txt2')
    var npasso = document.getElementById('txt3')
    var res = document.getElementById('contar')
    var c = Number(nstart.value)
    var cend = Number(nend.value)
    var cpasso = Number(npasso.value) 
    if (c < cend){
        for(c;cend;cpasso)
        res.innerHTML = `${c}`
    }
    
}