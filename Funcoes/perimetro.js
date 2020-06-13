// Vamos criar uma função perimetro que nos diga o perímetro de um 
// círculo quando damos a ele o raio como parâmetro. Também a função 
// area que nos dá a área de um círculo quando recebe o raio como parâmetro. 
// Lembre-se de usar o valor de 3.14 no lugar do π.

function perimetro(raio){
    return 2 * 3.14 * raio;
}

function area(raio){
    return 3.14 * raio * raio;
}

console.log(perimetro(2));
console.log(area(2));