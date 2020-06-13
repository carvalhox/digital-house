// Escreva a função “medalhaDeAcordoComPosto(numero)”, que recebe um 
// número como parâmetro. Usando apenas o máximo de um “if” apenas. 
// Talvez os arrays possam ser úteis aqui. Você tem que devolver a medalha 
// que corresponde às primeiras posições de uma competição:

//  medalhaDeAcordoComPosto (1)
// "ouro"
//  medalhaDeAcordoComPosto (2)
// "prata"
//  medalhaDeAcordoComPosto (3)
// "bronze"
// medalhaDeAcordoComPosto (4)
// "nada"
//  medalhaDeAcordoComPosto (5)
// "nada"



var medalha = ["ouro","prata","bronze","nada"];
       function medalhaDeAcordoComPosto(numero){
           if(numero==1){
               return medalha[0]
           } else if (numero == 2){
               return medalha[1]
           } else if(numero == 3){
               return medalha[2]
           } else {
               return medalha[3]
           }
       
}


console.log(medalhaDeAcordoComPosto(10));