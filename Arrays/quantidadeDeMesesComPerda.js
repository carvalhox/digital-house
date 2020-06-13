// Escreva a função quantidadeDeMesesComPerda. A estrutura da função 
// é semelhante às que temos feito, vamos lá! Para lhe ajudar já iniciamos a 
// função para você, você só precisa preencher as lacunas.


var mes = [0,-3,-5,2];
function quantidadeDeMesesComPerda(umPeriodo) {
  let quantidade = 0;
  for (let mes=0; mes< umPeriodo.length; mes++) {
    if(umPeriodo[mes] < 0){
      quantidade++;
    }
  }
  return quantidade;
}

console.log(quantidadeDeMesesComPerda(mes))