// Defina a função somaDosPares(x) que retorna a soma total de todos 
// os números que são pares, ou seja, divisíveis por 2 obtendo resto 0. 
// Desta forma: 0 + 2 + 4 + 6 + 8 + 10 + ..... X


function somaDosPares(x){
    var somaPares=0;
    for(var i=0;i<=x;i++){
        if(i%2==0){
            somaPares = somaPares + i;
        }
    }
    return somaPares;
}

console.log(somaDosPares(6))