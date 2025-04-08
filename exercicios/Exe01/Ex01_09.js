// Ex01_09.js - Faça um algoritmo que leia o preço do produto e mostre seu novo preço com 5% de desconto.
const prompt = require('prompt-sync')();

let preco = Number(prompt('Digite o preço do produto: '))

//desconto
// let desconto = preco * 5 / 100;
// let desconto = preco * 0.05;
 let precoComDesconto = preco - preco * 0.05;
 console.log(`Preço sem desconto ${preco.toFixed(2)}`);
 console.log(`Preço com desconto ${precoComDesconto.toFixed(2)}`);

