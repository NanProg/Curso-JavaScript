function fato(n) {
    let fatorar = 1
    for (let c = n;c>1;c--) {
        fatorar *= c
    }
    return fatorar
}
console.log(fato(5))