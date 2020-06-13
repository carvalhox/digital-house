// Defina a função possoIrAoBanco que, receba dois parâmetros, o primeiro
// é diaDaSemana (string) e o segundo horaAtual(numero), a função deve 
// retornar true, apenas se o banco estiver aberto.

function possoIrAoBanco(diaDaSemana,horaAtual){
    
    return diaDaSemana != "Sábado" && diaDaSemana != "Domingo" && horaAtual > 9 && horaAtual<15;
}
console.log(possoIrAoBanco("sexta", 18))