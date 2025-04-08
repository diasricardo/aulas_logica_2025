// Receba 5 números e verifique a soma e a 
// quantidade de todos os pares e ímpares digitados
const prompt = require('prompt-sync')()

somaPar = 0;
somaImpar = 0;
qtdPar = 0;
qtdImpar = 0;
let entrada = 0;
for(let i = 0; i <= 5; i++){
    entrada = Number(prompt("Digite um numero: "))
    if(entrada % 2 == 0){
        somaPar += entrada;
        qtdPar++
    }
    else{
        somaImpar += entrada;
        qtdImpar++
    }
}

console.log(`A soma de ${qtdPar} é ${somaPar}`)
console.log(`A soma de ${qtdImpar} é ${somaImpar}`)