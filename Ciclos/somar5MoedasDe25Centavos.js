// Escreva uma função somar5MoedasDe25Centavos, que adiciona o valor de 5 
// moedas de 0,25 centavos e retorna o resultado.

// Por exemplo:

//  somar5MoedasDe25Centavos()
// 1.25
// Isso fez 0.25+0.25+0.25+0.25+0.25


function somar5MoedasDe25Centavos(){
    var soma = 0;
    for(var i=0;i<5;i++){
        soma = soma + 0.25;
    }
    return soma;
}

console.log(somar5MoedasDe25Centavos())