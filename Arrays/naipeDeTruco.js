// Escrever uma função naipeDeTruco, que dado um naipe, devolva uma lista 
// de strings, uma por cada carta desse naipe seguindo as cartas do truco:

//  naipeDeTruco("espadas")
// ["1 de espadas", "2 de espadas", "3 de espadas" ..., "12 de espadas"]
// Lembre-se que as cartas de truco incluem todas as cartas numeradas de 1 a 12, 
// com exceção das cartas 8 e 9

function naipeDeTruco(nomeNaipe) {
    var naipe = [];
    for (let i=1; i <= 7; i++){
             naipe.push(i + " de " + nomeNaipe);
    }
    for (let i=10; i <= 12; i++){
             naipe.push(i + " de " + nomeNaipe);
    }

    return naipe
}

console.log(naipeDeTruco("espadas"))