function myFunction (a, b, c, d, e, f) {
    /*
    let soma = a + b
    let subtracao = soma - c
    let multiplicacao = subtracao * d / e
    let resultado = multiplicacao ** f */
    return (((((a+b) - c) * d / e ) ** f ))
}

console.log(myFunction(6, 5, 4, 3, 2, 1))
console.log(myFunction(6, 2, 1, 4, 2, 3))
console.log(myFunction(2, 3, 6, 4, 2, 3))

