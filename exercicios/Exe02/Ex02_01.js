//Ex02_01.js - Leia 2 notas de um aluno, calcule a média 
// e imprima aprovado ou reprovado 
// (para ser aprovado a média deve ser no mínimo 7)

const prompt = require('prompt-sync')();

// ler duas notas
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));

let media = (nota1 + nota2) / 2;

if(media >= 7){
    console.log(`A media de ${nota1} e ${nota2} é ${media} e você foi aprovado`)
}else{
    console.log("Reprovado")
}

