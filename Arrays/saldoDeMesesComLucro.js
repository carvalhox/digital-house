// Escreva a função saldoDeMesesComLucro. Você pode usar a mesma estrutura 
// do exercício dos exercícios anteriores, porém não tão rápido! Mas lembre-se 
// que esta função precisa retornar um array.

var mes = [0,1,-5,2,6];
function saldoDeMesesComLucro(umPeriodo) {
  let quantidade = 0;
  var array = [];
  for (let mes=0; mes< umPeriodo.length; mes++) {
    if(umPeriodo[mes] > 0){
      array.push(umPeriodo[mes])
    }
  }
  return array;
}

console.log(saldoDeMesesComLucro(mes))