//Importano a biblioteca para entrada de dados
const prompt = require('prompt-sync')();

// Variaveis e constantes
//Passo 1 REceber o nome da pessoa
let nome = "Ayrton";
let idade = 36;
let peso = 76.5
console.log(nome, idade, peso);

// REceber e armazena o texto em uma variavel
    let     curso   =     "Desenvolvimento de Sistemas"
//  #tipo   nome  recebe   valor       na variavel

//Exibir o valor armazenado
console.log("curso") //Imprimo uma string(texto)
console.log(curso) //imprimi o valor que esta dentro da variavel
console.log("curso:", curso);

//criando e atribuindo valor a outras variaveis
let idade2 = 35 // valor do tipo int
let temperatura = 23.5; //valor do tipo float
let nome2 = "Lyuz"

console.log("Olá", nome2, ",você tem:", idade2, 
        "e hoje esta fazendo", temperatura, "ºC" );

//Usando template string
console.log(`Olá ${nome2}, você tem ${idade2} 
    e hoje está fazendo: ${temperatura}ºC
    `)

    let chovendo = false;
    let dia = true;
    // nas constantes não podem ser reatribuidos novos valores
    const PI = 3.1415;
    console.log(PI);

     // Utilizando prompt para receber dados
//Entrada de dados

//no prompt sempre recebemos uma string
nome = prompt('Qual é seu nome ? ')
//usando o parseInt ou parseFloat converte os valores recebidos
//que vem como string para int ou float
idade = parseInt(prompt("Qual sua idade: "))
peso = parseFloat(prompt('Qual seu peso ? '))

console.log(`Seu nome é ${nome}, você tem ${idade} e pesa ${peso}`)
// valida o tipo da variavel
console.log(typeof(idade))
console.log(typeof(peso))
//Apos a conversao dos valores é possivel realizar
//calculos matematicos
console.log(idade + peso);

