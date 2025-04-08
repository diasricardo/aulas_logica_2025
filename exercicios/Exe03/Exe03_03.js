//Exe03_03.js - Peça ao usuário para digitar o nome de um mês e 
// imprima o número de dias naquele mês.

//Importando a biblioteca para entrada de dados
const prompt = require('prompt-sync')();

let mes = prompt('Digite o mês: ')

if(mes == "Janeiro" || mes == "Marco" || mes == "Maio" || mes == "Julho" || mes == "Agosto" || mes == "Outubro" || mes == "Dezembro"){
    console.log(`O mês de ${mes} tem 31 dias`)
}
else if(mes == "Abril" || mes == "Junho" || mes == "Setembro" || mes == "Novembro"){
    console.log(`O mês de ${mes} tem 30 dias`)
}
else if(mes == "Fevereiro"){
    console.log(`O mês de ${mes} tem 29 dias`)
}
else {
    console.log(`Mes inválido!`)
}