// chamando a biblioteca que será utilizada
let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');
console.log('Nome digitado: ' + nome);

// Toda entrada é String
let num; // criação de variável

// entrada
num = entrada('Digite um número: ');
let n1 = parseInt(num);
num = entrada('Digite outro número: ');
let n2 = parseInt(num);

// processamento
let soma = n1 + n2;

// saída
console.log('A soma do nº ' + n1 + ' com o nº ' + n2 + ' é: ' + soma);


entrada();
console.log('Fim do programa');