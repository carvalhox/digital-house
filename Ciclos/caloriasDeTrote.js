// Crie uma função chamada caloriasDeTrote(), que recebe por parâmetro o número de 
// voltas representado por um valor numérico e retorne a quantidade de calorias que será consumida.
// Por exemplo:

//  caloriasDeTrote(2)
// Deveria devolver 15 onde 5 calorias são da primeira volta (5 * 1) mais 10 calorias da segunda (5 * 2).


function caloriasDeTrote(voltas){
    var calorias = 0, soma = 0;
    for(var i=1;i<=voltas;i++){
        calorias = 5*i;
        soma = soma + calorias
    }

    return soma
}

console.log(caloriasDeTrote(2))