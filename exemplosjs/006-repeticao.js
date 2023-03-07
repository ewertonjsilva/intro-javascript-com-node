
let entrada = require('prompt-sync')(); 

console.log('REPETIÇÃO');
let valor;
valor = entrada('Insira o valor inicial: ');
let n1 = parseInt(valor);
valor = entrada('Insira o valor final: ');
let n2 = parseInt(valor);


for (let cont = n1; cont <= n2; cont++) {
    console.log(cont);
}


let contador = n1;
while (contador <= n2) {
    console.log(contador);
    contador++;
}

console.log('Contador de um programa onde as variáveis recebidas foram: ');
console.log('1ª: ' + n1);
console.log('2ª: ' + n2);
