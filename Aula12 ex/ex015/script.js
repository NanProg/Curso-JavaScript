var now = new Date
var horas = now.getHours()
var minutos = now.getMinutes()
var horario = document.getElementById('txt')
var img = document.getElementById('img')
horario.innerHTML = `Nesse momento são ${horas}:${minutos} `
function carregar(){
    if (horas < 6){
        img.src = 'icon-madrugada.png'
        document.body.style.background = 'gray'
    } else if (horas < 12){
        img.src = 'icon-manhã.png'
        document.body.style.background = 'khaki'
    } else if (horas < 18){
        img.src = 'icon-tarde.png'
        document.body.style.background = 'orange'
    } else{
        img.src = 'icon-noite.png'
        document.body.style.background = 'gray'
    }
}