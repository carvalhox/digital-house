// escreva uma função somarMoedasDe25(quantidadeDeMoedas), que toma como parâmetro 
// um valor numérico e retorna a soma das moedas de 25 centavos. Por exemplo:

//  somarMoedasDe25(7)
// 1.75
// Isso fez 0.25+0.25+0.25+0.25+0.25+0.25+0.25


function somarMoedasDe25(quantidadeDeMoedas){
    var soma = 0;
    for(var i=0;i<quantidadeDeMoedas;i++){
        soma = soma + 0.25;
    }
     return soma;
}

console.log(somarMoedasDe25(7))