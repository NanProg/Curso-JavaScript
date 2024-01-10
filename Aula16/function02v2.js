/*
function multi(n1=0, n2=0) {
    return n1 * n2
}

console.log(multi(2, 3))
*/
let c = 0
for (c;c<=10;c++) { //tabuada utilizando função
    let n = 5
    function tabuada (n=0) {
        return n * c
    }
    console.log(`${n} x ${c} = ${tabuada(n)}`)
}