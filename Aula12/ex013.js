var now = new Date()
var hora = now.getHours()
console.log(`Agora são exatamentes: ${hora}Hrs.`)
if (hora < 6){
    console.log('Boa madrugada')
} else if (hora < 12){
    console.log('Bom dia')
} else if(hora >= 18){
    console.log('Boa noite')
} else{
    console.log('Boa tarde')
}