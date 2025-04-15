// Crie uma lista com 5 números aleatórios e 
// exiba o nr e seu dobro.

let numeros = [];

for(let i = 0; i< 5; i++){
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numeros.push(numeroAleatorio)
    console.log(`O dobro de ${numeros[i]} : ${numeros[i] * 2}`)
}
