let num = [12,4,5,4,7,1,366,34,24,867,13,67,454,225,254,11,132,235]
let c = num.indexOf(7)
for (var cont = 0;cont <= c; cont++){
    console.log(`${num[cont]}`)
}

/*
num.sort()
for (var c in num) {
    console.log(`Posição ${c} tem o valor ${num[c]}`)
}
*/

/*
var c = 0
for (c;c<num.length;c++){
    console.log(`A posição ${c} tem o valor de vetor ${num[c]}`)
}
*/


/*
let num = [28,5,3,87,6,2]
num[2] = 29
num.push(15)
num.sort()
console.log(`Valores: ${num}, Posições: ${num.length}`)
console.log(`O primeiro valor desse vetpr é: ${num[0]}`)
*/