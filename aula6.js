const prompt = require('prompt-sync')()

// //operação com variaveis
// let nr1 = Number(prompt("Digite um numero?")); 
// let nr2 = Number(prompt("Digite um numero?"));

// let soma = nr1 + nr2;
// console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`); 

// let subtracao = nr1 - nr2;
// console.log(`A subtracao entre ${nr1} - ${nr2} é igual:${subtracao}`)
// console.log(`A subtração entre ${nr1} - ${nr2} é igual ${nr1 - nr2}`)

// let multiplicacao = nr1 * nr2;
// console.log(`A multiplicacao entre ${nr1} X ${nr2} é igual: ${multiplicacao}`);

// let divisao = nr1 / nr2;
// console.log(`A divisao entre ${nr1} / ${nr2} é igual: ${divisao}`);

// let exponenciacao = nr1 ** nr2;
// console.log(`A exponenciacao entre ${nr1} ** ${nr2} é igual: ${exponenciacao}`); 

// // Calculando valor do celular com desconto
// let valor = Number(prompt('Digite o preço do celular: '));
// let desconto = Number(prompt('Digite o preço do desconto: '));
// console.log(valor)
// valor = valor - desconto;
// console.log(`O valor do celular com desconto é R$${valor}`)

// //Calculando o dobro e a metade
// //passo 1
// let numero = Number(prompt('Digite um numero'));
// //passo 2
// let dobro = numero * 2;
// //passo 3
// let metade = numero / 2;
// //passo 4
// console.log(`O dobro de ${numero} é ${dobro} e a metade é ${metade}`);


// Calculando custo do projeto
// let horasPorDia = 8;
//Descobri a quantidade de horas trabalhadas por dia
let horasPorDia = Number(prompt("Digite a quantidade de horas trabalhadas por dia:"))

//Descrobrir o total de dias que trabalharei no projeto
// let diasTotais = 15;
let diasTotais = Number(prompt("Digite a quantidade de dias trabalhadas no projeto:"))
//calculando a qtd de horas totais
let horasTrabalhadas = horasPorDia * diasTotais;

//Inserir o custo da hora
// let custoHora = 100;
let custoHora = Number(prompt("Digite o valor da remuneração por hora:"))
//calculando o custo total
let custoTotal = horasTrabalhadas * custoHora;
//exibir resultado
console.log(custoTotal)