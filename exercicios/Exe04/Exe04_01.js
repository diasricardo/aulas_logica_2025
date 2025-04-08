// Pede ao usuário para digitar um número de 1 a 7 
// e imprime o dia da semana correspondente.
const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um numero de 1 a 7: "));
let diaSemana;

switch(numero){
    case 1:
        diaSemana = "Domingo";
        break;
    case 2:
        diaSemana = "Segunda-Feira";
        break;
    case 3:
        diaSemana = "Terça-Feira";
        break;
    case 4:
        diaSemana = "Quarta-Feira";
        break;
    case 5:
        diaSemana = "Quinta-Feira";
        break;
    case 6:
        diaSemana = "Sexta-Feira";
        break;
    case 7:
        diaSemana = "Sábado";
        break;
    default:
        diaSemana = "Valor inválido";
}

console.log(`Hoje é ${diaSemana}`);
