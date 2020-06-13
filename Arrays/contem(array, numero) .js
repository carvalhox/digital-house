// Escreva a função contem(array, numero) que nos diz se um array contém um determinado elemento.

function contem(array, x){
    if (array.indexOf(x) != -1){
        return true;
    } else {
        return false;
    }
}

var array = [3,5,6];
var x = 3;
contem(array, x)