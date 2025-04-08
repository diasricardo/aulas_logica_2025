// Pede ao usuário para digitar o número de um mês 
// e imprime o seu nome.

const prompt = require('prompt-sync')();

let mes = prompt("Digite o nome do mês: ").toLowerCase();

switch(mes){
    case "janeiro":
    case "março":
    case "maio":
    case "julho":
    case "agosto":
    case "outubro":
    case "dezembro":
        console.log(`${mes} tem 31 Dias`);
        break;
    case "abril":
    case "junho":
    case "setembro":
    case "novembro":
        console.log(`${mes} tem 30 Dias`);
        break;
    case "fevereiro":
        console.log(`${mes} tem 29 Dias`);
        break;
    default:
        console.log('Mês inválido');
}
