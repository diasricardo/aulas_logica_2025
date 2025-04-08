//Exe03_01.js - Peça ao usuário para digitar um número de 1 a 7 
// e imprime o dia da semana correspondente.
const prompt = require('prompt-sync')();

// peça ao usuario para digitar um numero de 1 a 7
let numero = Number(prompt('Digite um numero: '));

if(numero == 1){
    console.log('Domingo')
}
else if(numero == 2){
    console.log('Segunda')
}
else if(numero == 3){
    console.log('Terça')
}
else if(numero == 4){
    console.log('Quarta')
}
else if(numero == 5){
    console.log('Quinta')
}
else if(numero == 6){
    console.log('Sexta')
}
else if(numero == 7){
    console.log('Sabado')
}
else{
    console.log('Numero invalido')
}
