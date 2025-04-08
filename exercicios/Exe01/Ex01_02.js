//Ex01_02.js - Crie um programa que leia um número inteiro e mostre na tela o seu sucessor e antecessor.
const prompt = require('prompt-sync')();

//ler um numero inteiro
let numero = parseInt(prompt('Digite um numero: '));

//mostrar na tela
console.log(`O antecessor do numero ${numero} é ${numero - 1}`);
console.log(`O sucessor do numero ${numero} é ${numero + 1}`);