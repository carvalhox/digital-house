// Definir a função sinal que recebe um número para alcançar 
// o objetivo desejado. DICA: Lembre-se que você pode precisar usar mais de um if.

function sinal(numero){
    if (numero > 0){
        return 1
    }
     else if (numero < 0){
        return -1;
    }
    else {
        return 0;
    }
}

console.log(sinal(5))