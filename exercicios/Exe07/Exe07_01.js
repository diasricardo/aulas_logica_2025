// Crie uma lista de filmes com 7 filmes:

let filme = "Harry"//Aqui é uma variavel simples
let listaFilmes = ["Harry Potter", "O senhor dos anéis", "Homem de Ferro", "A lista de Schindler"]
console.log(listaFilmes)
// Exiba apenas o primeiro o filme da lista
console.log(`Filme na posição 1: ${listaFilmes[0]}`)
// Exiba o filme da posição 4
console.log(`Filme na posição 4: ${listaFilmes[3]}`)

// Substitua o filme da última posição e exiba a lista
listaFilmes[3] = "O resgate do soldado  Ryan"
console.log(listaFilmes)

listaFilmes[listaFilmes.length -1] = "Homem Aranha"
console.log(listaFilmes)

// Insira um novo filme no final da lista e exiba a lista
listaFilmes.push('Maquina Mortifera');
console.log(listaFilmes)
//spread que adiciona no fim
listaFilmes = [...listaFilmes, "Maquina Mortifera 2"]
console.log(listaFilmes)

// Insira um novo filme na posição 5 e exiba a lista
listaFilmes[5] = "A vila"
console.log(listaFilmes)

// Exclua o primeiro filme e exiba a lista
listaFilmes.shift()
// Exclua o último filme e exiba a lista
listaFilmes.pop()

// Exiba os 3 primeiros filmes da lista
console.log(listaFilmes.slice(0,3))
console.log(listaFilmes)

// Exiba os 4 últimos filmes da lista
console.log(listaFilmes.slice(-2))

// Exiba a quantidade de filmes atualmente na lista
console.log(listaFilmes.length)
//Ordene os filmes em ordem decrescente e exiba-os
console.log(listaFilmes.sort().reverse())
console.log(listaFilmes + "Comentario")
