// Escreva as seguintes funções: 1. acontece, que diz se a aula sucederá de acordo com 
// o array dos estudantes que entraram. 2. aberturas, que utiliza um array com os arrays 
// dos estudantes que entraram nos outros dias, e a quantidade mínima de estudantes, e diga 
// quais os dias em que as aulas aconteceram e quais não. Por exemplo:

// aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2)
// [true, false, false]

function acontece(arrayLista, numeroMinimo) {
    let pontuais = [];
    for (let i = 0; i < arrayLista.length; i++) {
        if (arrayLista[i] <= 0) {
            pontuais.push(arrayLista[i]);

        };
    };
    return pontuais.length >= numeroMinimo;
}

var alunosDaSegunda = [10, -5, 5, -2, 11, 3, 0];
console.log(acontece(alunosDaSegunda, 2));

var alunosDaTerca = [-2, 11, 3, 0]
var alunosDaQuarta = [-10, -5, 31, -2, -3, 0]

function aberturas(arraysDias, numeroMinimo) {
    let resultado = [];
    for (let i = 0; i < arraysDias.length; i++) {
        resultado.push(acontece(arraysDias[i], numeroMinimo));
    };
    return resultado
}

console.log(acontece([alunosDaSegunda, alunosDaTerca, alunosDaQuarta], 3))