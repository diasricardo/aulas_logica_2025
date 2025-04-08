//Ex02_04.js - Receba um número inteiro e diga se é positivo ou negativo
const prompt = require('prompt-sync')();

let numero = Number(prompt('DIgite um numero'));
if(numero > 0){
    console.log(`O ${numero} é positivo`)
}
else{
    console.log(`O ${numero} é negativo`)
}