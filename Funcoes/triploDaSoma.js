// Declare uma função chamada triploDaSoma() que recebe dois parâmetros. 
// Então você tem que adicionar ambos e retornar três vezes o valor do resultado 
// da soma dos dois parâmetros . Para fazer isso, você já conta (mesmo que não 
// veja  declarado) com a função triplo, que recebe um parâmetro e retorna o valor 
// dele multiplicado por três.

function triplo(valor){
    return valor * 3;
}
function triploDaSoma (numeroA, numeroB) {
    var soma = numeroA + numeroB;
    return triplo(soma);
}