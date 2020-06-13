// Escreva uma função escada que utilize uma altura (um número) e 
// retorne um array que represente a escada correspondente. 
// Não esqueça que o espaço " " faz parte da resposta :)

// var escada5 = [
//     "    #",
//     "   ##",
//     "  ###",
//     " ####",
//     "#####"
//    ]

function escada(altura){

    var escada = []
    let degrau;
     for(let i=1; i<=altura;i++){
         degrau = " ".repeat(altura-i) + "#".repeat(i);
         escada.push(degrau)
     }
     
     return escada

}
    
console.log(escada(5))
    