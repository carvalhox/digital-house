// Complete a função quantidadeDeMesesComLucro. Se você prestar atenção, 
// notará que tem uma estrutura semelhante ao problema anterior 

// Exemplo:

// function quantidadeDeMesesComLucro(umPeriodo) {
//   var quantidade= ????;
//   for (let mes=0; mes< umPeriodo.length; mes++) {
//     ????
//   }
//   return quantidade;
// }



var mes = [0,-3,-5,2];
function quantidadeDeMesesComLucro(umPeriodo) {
  let quantidade = 0;
  for (let mes=0; mes< umPeriodo.length; mes++) {
    if(umPeriodo[mes] > 0){
      quantidade++;
    }
  }
  return quantidade;
}

console.log(quantidadeDeMesesComLucro(mes))