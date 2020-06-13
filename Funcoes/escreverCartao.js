// Escreva a função escreverCartao, que recebe como parâmetros um título, 
// um nome e um sobrenome e retorna uma única string como resultado. Por exemplo:
// escreverCartao("Dra.", "Ana", "Pérez")
// "Dr. Ana Pérez"

function escreverCartao(titulo,nome,sobrenome){
    return titulo + " " + nome + " " + sobrenome;
}

console.log(escreverCartao("Dra.", "Ana", "Pérez"))