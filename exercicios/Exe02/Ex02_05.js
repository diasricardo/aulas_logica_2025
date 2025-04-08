//Ex02_05.js - Pergunte o ano de nascimento de uma pessoa e diga se ele é maior de idade​
const prompt = require('prompt-sync')();

//ano de nascimento
let anoNasc = parseInt(prompt('Digite o ano de nascimento: '))
// veja se e maior ou menor de idade
if(( 2025 - anoNasc) >= 18){
    console.log('Você é maior de idade');
}else{
    console.log('Você é menor de idade');
}