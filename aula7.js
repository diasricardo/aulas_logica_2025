// estruturas condicionais e operadores relacionais
let a = 2;
let b = 3;
// operadores relacionais
console.log(a == b); // relação de igualdade
console.log(a != b); //relação de diferença
console.log(a > b); //maior
console.log(a >= b); //maior ou igual
console.log(a < b); //menor 
console.log(a <= b); //menor ou igual 

// Estruturas condicionais
let tenhoIngresso = true;
if(tenhoIngresso == true){
    //bloco de codigo
    console.log('Posso entrar!')
}

//Validando maioridade

const prompt = require('prompt-sync')()
// receber o valor da idade
let idade = Number(prompt('Qual sua idade? '))

//verificar se é maior ou igual a 18
if(idade >= 18){
    console.log('Maior idade')
}

tenhoIngresso = false;
if(tenhoIngresso == true){
    //bloco de codigo
    console.log('Posso entrar!')
}else{
    console.log('Estou barrado no baile')
}

//Outro exemplo de estrutura condicional(if-else)
idade = Number(prompt('Digite a idade: '))
//verificar se e maior que 18
if(idade >= 18){
    console.log('Você é maior de idade');
}else{
    console.log('Você e menor de idade')
}