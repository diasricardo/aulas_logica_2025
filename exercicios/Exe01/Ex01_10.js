const prompt = require('prompt-sync')();

// Ex01_10.js - Faça um algoritmo que pergunte a quantidade de km percorridos por um carro alugado e a quantidade de
// dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0.15 por km
// rodado.

let dias = parseInt(prompt('Digite a qtd de dias que o carro foi alugado: '));
let kmPercorrido = parseFloat(prompt('Digite a qtd de km percorrido: '));

//calcular o custo por dia e por km
let custoPorDia = 60;
let custoPorKM = 0.15;

//calcular custo total
let custoTotal = (dias * custoPorDia) + (kmPercorrido * custoPorKM)

console.log(`Custo da viagem: ${custoTotal.toFixed(2)}`);
