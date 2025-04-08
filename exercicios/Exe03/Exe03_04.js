// Exe03_04.js - Peça ao usuário para digitar 2 notas e calcule sua média, 
// e considere a média acima de 7 aprovado, entre 5 e 7, em recuperação, abaixo de 5 reprovado.

//Importando a biblioteca para entrada de dados
const prompt = require('prompt-sync')();

let nome =  prompt("Digite seu nome: ")
let  nota1 = Number(prompt(`${nome} qual sua primeira nota: `))
let  nota2 = Number(prompt(`${nome} qual sua segunda nota: `))
let media = (nota1 + nota2) / 2

if(media > 7){
    console.log(`Olá ${nome}, você foi aprovado! Com média: ${media} `)
}
else if(media > 5 || media < 7){
    console.log(`Olá ${nome}, você esta em recuperação! Com média: ${media} `)
}
else{
    console.log(`Olá ${nome}, você foi reprovado! Com média: ${media} `)
}
