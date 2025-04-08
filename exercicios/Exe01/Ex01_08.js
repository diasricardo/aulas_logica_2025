// Crie um programa que leia a largura e a altura de uma parede em metros, calcule a sua área e a quantidade
// de tinta necessária para pintá-lo, sabendo que cada litro de tinta pinta uma área de 2m².
const prompt = require('prompt-sync')();

//ler altura e largura
let altura = Number(prompt('Digite a altura'))
let largura = Number(prompt('Digite a largura'))
//Calcular a area
let area = largura * altura;

//calcular quantida de tinta necessaria 1 litro cobre 2m²
let tintaNecessaria = area / 2;
console.log(`Area ${area}`);
console.log(`Tinta necessaria ${tintaNecessaria.toFixed(2)} litros de tinta`);

