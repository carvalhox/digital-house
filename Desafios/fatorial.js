// Escreva uma função fatorial, que calcule o fatorial de um número

function fatorial(numero) {
    let fat = 1;
    for (let i=1; i <= numero; i++){
        fat *= i;
    }
    return fat
}

console.log(fatorial(5))