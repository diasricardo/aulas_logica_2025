// Receba uma palavra do usuário 
// e calcule quantas vogais há nesta palavra.
const prompt = require('prompt-sync')()
let vogais = ['a', 'e', 'i', 'o', 'u']

let palavra = prompt('Digite uma palavra: ')
let qtdVogais = 0
for(let letra of palavra){
    if(vogais.includes(letra)){
        qtdVogais++
    }
}

console.log(`${palavra} tem ${qtdVogais} vogais`)

