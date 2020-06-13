// Escreva a função produto.
// Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.


function produto(array) {
    let produto = 1;
    for (let i=0; i < array.length; i++){
        produto *= array[i];
    }
    return produto
}

console.log(produto([1,4,7]))