const entrada = require('prompt-sync')(); 

function soma (numeros = [0]) {
    let resultado = 0;
    for (let i in numeros) {
        resultado += numeros[i];
    }
    return resultado;
}

let listaNum = [];
let num = '';

do {
    num = entrada('Digite um número para somar ou 0 para encerrar: ');
    if (num === '0') {
        break;
    }
    listaNum.push(parseInt(num));
} while (num !== '0'); 

const total = soma(listaNum);
console.log('Total da soma: ' + total);