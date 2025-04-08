const prompt = require('prompt-sync')();

console.log("Bem-vindo ao curso de JavaScript!")
console.log("Estou aprendendo a usar o console.log!");

console.log(15 + 25);
console.log(100 - 45);
console.log(12 * 7);
console.log(144 / 12);
console.log(20 % 3);
console.log(2 ** 5);

//Exercicios de variaveis e entradade de dados

// 1 - Criar 4 variaveis nomeAluno, altura, escola, ano
let nomeAluno = "Mariana";
let altura = 1.75;
let escola = 'Sesi Andradina';
let ano = "2º Medio"
//exibir os valores das variaveis
console.log(`A aluna ${nomeAluno} tem ${altura}, estuda na escola ${escola} e esta no ${ano}`)

//2 - Crie 3 variaves e atribua valores
let nomeProfessor = "Edcarlos"
let materia = "Matemática"
let anoIngresso  = 2020;
//Exibir valores das variaveis
    console.log(`O professor ${nomeProfessor} que leciona
         a materia ${materia} no ${ano}. 
         E ingressou na ${escola} no ano de ${anoIngresso}`)

//Reatibuindo valores as nossas variaveis.
nomeAluno = prompt('Digite o nome do aluno? ');
altura = parseFloat(prompt('Digite a altura? '))
escola = prompt('Digite o nome da escola? ')
ano = parseInt(prompt('Digite o ano da turma? '))
console.log(`A aluna ${nomeAluno} tem ${altura}, estuda na escola ${escola} e esta no ${ano}`)

nomeProfessor = prompt('Digite o nome do professor: ')
materia = prompt('Digite o nome da matéria: ')
anoIngresso = parseInt(prompt('Digite o ano de ingresso: '))
console.log(`O professor ${nomeProfessor} que leciona
    a materia ${materia} no ${ano}. 
    E ingressou na ${escola} no ano de ${anoIngresso}`)