// Crie um programa que receba notas de 0 a 10 até que a nota digitada 
// seja a palavra "fim", calcule a média
// e exiba as seguintes mensagens para cada faixa de valores
// nota < 5 = I, nota >= 5 e < 6.5 = R, nota > 6.5 e < 8.5 = B 
// e nota >= 8.5 MB

let entrada = require('prompt-sync')(); 

console.log('Programa de cáculo de notas da ETEC');
let valor, n; 
let cont = 0, soma = 0;

do {
    cont++;
    valor = entrada('Digite a ' + cont + 'ª nota: ');
    n = parseFloat(valor);
    if (!isNaN(n)){
        soma += n;
    }
} while (valor.toLowerCase() !== 'fim');


let media = soma / (cont -1);
console.log(media);
if (media < 5) {
    valor = 'I';
}

if (media >= 5 && media < 6.5) {
    valor = 'R';
}

if (media >= 6.5 && media < 8.5) {
    valor = 'B';
}

if (media >= 8.5) {
    valor = 'MB';
}

console.log('A nota final é: ' + valor);