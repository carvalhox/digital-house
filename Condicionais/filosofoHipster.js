// Defina a função filosofoHipster que recebe como parâmetro: 
// a profissão de uma pessoa (string), nacionalidade (string) 
// e o número de quilômetros que ele anda por dia (número). 
// Com esses parâmetros avalie se essa pessoa é ou não (true / false), 
// um filósofo Hipster. Tenha em mente que um filósofo Hipster é um Músico, 
// nascido no Brasil e que gosta de andar mais de 2 quilômetros por dia.

function filosofoHipster (profissao,nacionalidade,numeroKM){
    
    return profissao == "Músico" && nacionalidade == "Brasil" && numeroKM > 2 
}
console.log(filosofoHipster("Músico","Brasil",5))