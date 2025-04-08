// Faça um programa que leia 10 valores inteiros e:
// Encontre e mostre o maior valor
// Encontre e mostre o menor valor
// Calcule e mostre a média dos números lidos

const prompt = require('prompt-sync')();

let i = 0;
let entrada;
let maior = 0
let menor = Infinity;
let soma = 0
while(i <= 10){
    entrada = Number(prompt('Digite um numero: '));
    if(entrada > maior){
        maior = entrada;
    }
    if(entrada < menor){
        menor = entrada;
    }

    soma += entrada;
    // soma = entrada + soma
    i++;
}

let media = soma / 10;
console.log(`Maior valor: ${maior}`)
console.log(`Menor valor: ${menor}`)
console.log(`Media: ${media.toFixed(2)}`);
