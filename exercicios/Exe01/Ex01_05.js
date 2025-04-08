// Ex01_05.js - Crie um programa que leia o valor em metros e o exiba convertido em centímetros, milímetros e km
const prompt = require('prompt-sync')();

//leia a quantidade de metros
let metros = Number(prompt('Digite o tamanho em metros'));

//converta em centimetros
let centimetros = metros * 100;
let milimetros = metros * 1000;
let km = metros / 1000;

console.log(`${metros} convertidos para centimetros ${centimetros}`)
console.log(`${metros} convertidos para milimetros ${milimetros}`)
console.log(`${metros} convertidos para KM ${km}`)