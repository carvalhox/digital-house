// Defina a função chamada somatoria, que receba como parâmetro um 
// número e retorne a soma dos números antecessores a ele. Por exemplo:

//  somatoria(4)
// 6
// A função executa isso através do for 0+1+2+3


function somatoria(numero){
    var soma = 0;
    for (var i=0; i<numero; i++){
        soma = soma + i;
    }
    return soma;
    }


console.log(somatoria(4))