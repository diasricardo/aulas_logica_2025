//Ex01_01.js - Crie um programa que leia dois números# e mostre a soma entre eles.
const prompt = require('prompt-sync')();

//ler dois numeros
let numero1 = Number(prompt('Digite um numero: '));
let numero2 = parseFloat(prompt('Digite o segundo numero: '));

//Calular soma
let soma = numero1 + numero2;
console.log(`A soma de ${numero1} + ${numero2} é igual a:${soma}`)
