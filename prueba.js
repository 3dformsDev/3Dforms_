function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(calcularFactorial(8)); // Output: 24

