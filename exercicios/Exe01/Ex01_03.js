//Ex01_03.js - Crie um programa que leia um número e mostre o seu dobro, triplo e o valor dele elevado ao cubo.

const prompt = require('prompt-sync')();

//ler um numero
let numero = Number(prompt('Digite um numero: '));

//Mostrar os valores
console.log(`O dobro de ${numero} é ${numero * 2}`);
console.log(`O triplo de ${numero} é ${numero * 3}`);
console.log(`O valor de ${numero}³ ${numero ** 3}`);
