// Escreva a função podeSeAposentar que recebe por parâmetro a idade, 
// o sexo e os anos de contribuição previdenciária que uma pessoa tem, exemplo:
// podeSeAposentar(62, "F", 34) true
// Tenha em mente que a idade mínima para se aposentar para mulheres 
// é 60 anos, enquanto que para homens é 65. Em ambos os casos, você
// deve ter pelo menos 30 anos de contribuição.

function podeSeAposentar(idade,sexo,anos){
    
    return (idade > 60 && sexo == "F" && anos >=30) || (idade > 65 && sexo == "M" && anos >=30)
}

console.log(podeSeAposentar(62, "F", 34))