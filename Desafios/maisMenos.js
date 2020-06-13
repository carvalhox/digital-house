// Escreva a função maisMenos.
// Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar [0.5, 0.25, 0.25], 
// devido a que há 50% de positivos, 25% de zeros, e 25% de negativos.


function maisMenos(array){

    var arrayFinal = [];

    let pos = 0;
    let neg = 0;
    let zero = 0;

    for(let i=0; i < array.length;i++){
        if(array[i] > 0){
            pos+=1;
        }
        
        if(array[i]==0){
            zero+=1;
        }

        if(array[i]<0){
            neg+=1;
        }
    }
    
    arrayFinal.push(pos/array.length);
    arrayFinal.push(zero/array.length);
    arrayFinal.push(neg/array.length);
    
    return arrayFinal

}

console.log(maisMenos([1, 2, 0, -1]))