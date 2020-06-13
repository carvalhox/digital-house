// Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), 
// vemComCompania (booleano), temProblemaCardiaco (booleano), retorne true 
// ou false conforme o caso. Levar em conta as condições necessárias mencionadas acima.
//  podeSubir(1.7, false, true)
// false não pode subir porque embora seja maior do que 1.5m, tem um problema cardíaco

function podeSubir(alturaPessoa,vemComCompania,temProblemaCardiaco){

    return (alturaPessoa >= 1.5 && temProblemaCardiaco == false)  || 
            (alturaPessoa >= 1.2 && vemComCompania == true && temProblemaCardiaco == false)
}

console.log(podeSubir(1.7,false,false))