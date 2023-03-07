/*
    CRIAR UM PROGRAMA QUE RECEBA DOIS VALORES, O INICIAL E O FINAL
    SE O VALOR INICIAL FOR MENOR QUE O FINAL EXIBA UMA CONTAGEM CRESCENTE 
    SE O VALOR INICIAL FOR MAIOR QUE O FINAL EXIBA A CONTAGEM DECRESCENTE 
    DICA: TENTE UTILIZAR A ESTRUTURA DO WHILE.
*/

let entrada = require('prompt-sync')(); 

console.log('REPETIÇÃO');
let valor;
valor = entrada('Insira o valor inicial: ');
let n1 = parseInt(valor);
valor = entrada('Insira o valor final: ');
let n2 = parseInt(valor);
let contador = n1;

if (n1 < n2) { 
    while (contador <= n2) {
        console.log(contador);
        contador++;
    }
} if (n1 > n2) {
    do {
        console.log(contador);
        contador--;
    } while (contador >= n2);
} else {
    console.log('Os número inseridos são iguais.');
}




console.log('Contador de um programa onde as variáveis recebidas foram: ');
console.log('1ª: ' + n1);
console.log('2ª: ' + n2);
