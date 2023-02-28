let entrada = require('prompt-sync')();

let n, n1, n2;

n = entrada('Digite o 1º valor: '); 
n1 = parseInt(n); // quando for decimal usar parseFloat()
n = entrada('Digite o 2º valor: '); 
n2 = parseInt(n);

let soma, sub, mult, div, resto;

soma = n1 + n2;
sub = n1 - n2;
mult = n1 * n2;
div = n1 / n2;
resto = n1 % n2;

console.log(n1 + ' + ' + n2 + ' = ' + soma);
console.log(n1 + ' - ' + n2 + ' = ' + sub);
console.log(n1 + ' * ' + n2 + ' = ' + mult);
console.log(n1 + ' / ' + n2 + ' = ' + div.toFixed(2));
console.log(n1 + ' % ' + n2 + ' = ' + resto);
console.log(n1 + ' / ' + n2 + ' = ' + parseInt(div) + ' (inteiro da divisão)');

console.log('');
console.log('Fim do programa');
entrada();
