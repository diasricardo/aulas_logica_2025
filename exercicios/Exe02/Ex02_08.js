//Ex02_08.js - Receba o quanto um vendedor vendeu no mês,
//  se vendeu mais de R$ 5000,00 
// sua comissão será de 5% 
// se vendeu menos será de 3%, 
// exiba o valor de sua comissao

const prompt = require('prompt-sync')();
//receba a quantidade de vendas
let vendas = Number(prompt('Digite o total de vendas no mes: '));

if(vendas > 5000){
    let comissao = vendas * 0.05
    console.log(`A comissão para o mês é de: ${comissao}`);
}else{
    let comissao = vendas * 0.03;
    console.log(`A comissão para o mês é de: ${comissao}`);
}