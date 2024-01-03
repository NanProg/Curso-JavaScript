function verificar(){
    var nascimento = document.getElementById('txtano')
    var now = new Date()
    var anoatual = now.getFullYear()
    var idade = anoatual - nascimento
    var resposta = document.getElementById('resultado')
    if (nascimento.value.length == 0 || nascimento.value > anoatual){
        resposta.innerHTML = '[ERRO]'
        alert('Verifique corretamente os dados e tente novamente!')
    } else{
        var fsexo = document.getElementsByName('radiotxt')
        var idade = anoatual - Number(nascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked){
            genero = 'masculino'
            if (idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'jovem(H).png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adulto(H).png')
            } else{
                // idoso
                img.setAttribute('src', 'idoso(H).png')
            }
        } else{
            genero = 'feminino'
            if (idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'jovem(M).png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adulto(M).png')
            } else{
                // idoso
                img.setAttribute('src', 'idoso(M).png')
            }
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `Observamos que tem ${idade} anos e é do gênero ${genero}`
        resposta.appendChild(img)

    }
}

