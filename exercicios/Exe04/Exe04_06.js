// Pede o salário do funcionário, e 
// calcular o aumento que ele terá, 
// considerando se ganhar até 2000, reajuste de 12%, 
// até 4000, reajuste de 10%, 
// acima de 4000 reajuste de 8%,
//  exibir o novo salário.

const prompt = require('prompt-sync')();

let salario = Number(prompt('Digite o salario: '));

switch(true){
    case salario < 2000:
        salario = salario + (salario * 0.12);
        console.log(`Salario reajustado ${salario}`);
        break;
    case salario >= 2000 && salario < 4000:
        salario = salario + (salario * 0.10);
        console.log(`Salario reajustado ${salario}`);
        break;
    case salario > 4000:
        salario = salario + (salario * 0.08);
        console.log(`Salario reajustado ${salario}`);
        break;
    default:
        console.log('Operaçao invalida');    
}