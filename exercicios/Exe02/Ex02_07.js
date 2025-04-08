//Ex02_07.js - Receba a velocidade do carro e 
// exiba que foi multado se for maior que 80km/h, 
// o valor da multa será R$ 7,00 por cada km excedido, 
// exibir o valor da multa​
const prompt = require('prompt-sync')();

let velocidade = Number(prompt("Digite a velocidade: "))

if(velocidade > 80){
    console.log("Voce foi multado!");
    let multa = (velocidade - 80) * 7;
    console.log(`O valor da Multa é: ${multa} `);
}