// Iremos criar uma função chamada tamanhoNomeCompleto, que recebe 
// um nome e um sobrenome como parâmetros, e que irá devolver o tamanho 
// total, contando um espaço extra para separar ambos: 
// tamanhoNomeCompleto("Enzo", "Silva") devolve 10

function tamanhoNomeCompleto(nome,sobrenome){
    var tamanhoNome = nome.length;
    var tamanhoSobrenome = sobrenome.length;
    var tamanhoNomeCompleto = tamanhoNome + tamanhoSobrenome;
    return tamanhoNomeCompleto + 1;
}

console.log(tamanhoNomeCompleto("Juan", "Perez"));