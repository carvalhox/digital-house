// Execute uma função chamada passandoPelosPares() que mostra pelo console 
// aqui eu tenho o valor de x para cada valor PAR que percorra i de 0 até e inclusive 6.
// Lembre-se que como vamos passar apenas pelos pares a repetição deve ocorrer 4 vezes, 
// pois o objetivo é imprimir apenas os números pares.


function passandoPelosPares(){
    for(var i=0;i<=6;i++){
        if(i%2==0){
            console.log("aqui eu tenho o valor de " + i);
        }
    }
}