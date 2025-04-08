//Criando nosso primeiro FOR

for(let i = 0; i < 100; i++){
    console.log(i)
}

// Entregando os notebooks por ordem
const prompt = require('prompt-sync')();
console.log("Entregando Notebooks")

for(let nr = 1; nr <= 32; nr++ ){
    let nome = prompt(`Quem é o numero ${nr}`)
    let presente = prompt(`O(A) ${nome} veio para escola? (S ou N)`);

    if(presente == 'S'){
        console.log(`Pegar notebook ${nr}`);
        console.log(`Pegar mouse ${nr}`);
        console.log(`Pegar fonte ${nr}`);
        console.log(`Levar notebook até  ${nome}`);
    }
    else{
        console.log(`Não pegar notebook${nr}`);
    }
}
