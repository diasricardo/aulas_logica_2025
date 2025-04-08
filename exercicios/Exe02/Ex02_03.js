//Ex02_03.js - Receba um inteiro e diga se é par ou ímpar.
const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um numero: '))

let resto = numero % 2;

if(resto == 0){
// if((numero % 2) == 0){
    console.log(`${numero} é PAR`);
    
}else{
    console.log(`${numero} é ÍMPAR`);
}