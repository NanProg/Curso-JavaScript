let num = [5,3,8,1,2,9,20,18,11,33]

for (let c in num) {
    console.log(`Posição: ${c} | Valor: ${num[c]}`)
}

let nf = num.indexOf(3)
console.log(`${nf += 1}`) // Visualmente está na posição 2, porém na realidade no vetor ele está posição 1!

/*
let pos = 1
for (let c = 0;c < num.length; c++) {
    console.log(`A posição ${pos} tem o valor ${num[c]}`)
    pos++ // Fiz dessa para a posição começar no "1" e não no "0" como normalmente começa!
}
*/