// Escreva a função eNumeroDaSorte que, recebendo um número, diz 
// a se é um número da sorte. Lembre-se de que o número deve obedecer 
// às três condições mencionadas. Seu desafio adicional será: NÃO use o if.

function eNumeroDaSorte(numero){
    
    return numero > 0 && (numero%2==0 || numero%3==0) && numero != 15;
    }

console.log(eNumeroDaSorte(3))