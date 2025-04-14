let frutas = ['Maça', 'Banana', 'Uva', 'Abacaxi']

//A variavel x serve para iterar os valores ate o limte da lista
//O nome não é obrigatoriamente ser o nome i, x ou contador
//pode ser qualquer nome de variavel
for(let x = 0; x < frutas.length; x++){
    //O length identifica o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`)
}

let listaNomes = ['Bill Gates', 'Rafinha', 'Raul Seixas', 'Esteves','Vieira']
//para cada nome da lista nomes, escreva um nome
for(let nome of listaNomes){
    console.log(nome)
}

// verificando se é uma consoante
//lista de vogais
const prompt = require('prompt-sync')()
let vogais = ['a', 'e', 'i', 'o', 'u']
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'p',
    'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z' ]

let letra = prompt('Digite uma letra: ')
//Se letra estiver incluso na lista de vogais, identifico que 
//é uma vogal
if(vogais.includes(letra.toLowerCase())){
    console.log('É uma vogal')
}else if(consoantes.includes(letra.toLowerCase())){
    console.log('Consoante');}
else{console.log('Não e uma letra');}

//Obtendo a posição do item
for(let[pos,fruta] of frutas.entries()){
    //entries retorna o par de cada elemento do vetor
    //ou seja a posição e a fruta
    console.log(`Posição${pos} e fruta ${fruta}`)
}

// separando os items em uma lista
let produtos = 'Celular, Notebook, TV, Tablet, Headset'
//O split divide a string e forma uma lista a partir do limita
//no caso abaixo uma virgula
let listaProdutos = produtos.split(',')
for(let produto of listaProdutos){
    console.log(produto)
}

//Percorrendo uma string como uma lista(lista de caracteres)
let palavra = 'SENAI'
for(let letra of palavra ){
    console.log(letra)
}