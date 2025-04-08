// Receba alguns números e verifique a soma e a 
// quantidade de todos os pares e ímpares
// digitados, digite 0 para não receber mais
const prompt = require('prompt-sync')();
let entrada;
let qtdPar = 0;
let somaPar = 0;
let qtdImpar = 0;
let somaImpar = 0;

console.log("Digite números (0 para encerrar): ");
while(true){
    entrada = parseFloat(prompt("Número: "))

    if(entrada === 0){
        break;// encerra o loop
    }
    
    if(entrada % 2 == 0){
        somaPar = entrada + somaPar;
        qtdPar++
    }
    else{
        somaImpar = entrada + somaImpar;
        qtdImpar++;
    }
}

console.log(`Soma dos pares digitados: ${somaPar} quantidade de par: ${qtdPar}`)
console.log(`Soma dos impares digitados: ${somaImpar} quantidade de impar: ${qtdImpar}`)