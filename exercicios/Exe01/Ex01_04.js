//Ex01_04.js - Crie um programa que leia duas notas de um aluno, calcule e mostre sua média.

const prompt = require('prompt-sync')();

//ler as notas do aluno
let nota1 = Number(prompt('Digite a primeira nota: '));
let nota2 = Number(prompt('Digite a segunda nota: '));

let media = (nota1 + nota2) / 2
console.log(`A media é ${media}`);

// let media = nota1 + nota2
// let resultadoFinal = media / 2
