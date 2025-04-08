// Ex01_07.js - Crie um programa que leia quanto dinheiro a pessoa tem na carteira e mostre quantos dólares ela pode
// contar.
const prompt = require('prompt-sync')();

let reais = parseFloat(prompt('Digite o valor em reias: '))
let cotacao = parseFloat(prompt('Digite a cotação do dolar'));

let dolares = reais / cotacao;

console.log(`Tenho R$${reais} na minha carteira que equivale à $${dolares.toFixed(2)} `);
