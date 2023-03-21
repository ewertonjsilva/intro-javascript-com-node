let entrada = require('prompt-sync')(); 

// função sem parâmetro e sem retorno
function data () {
    const timeElapsed = Date.now(); 
    const hoje = new Date(timeElapsed);
    console.log('Hoje é: ' + hoje.toUTCString()); //https://www.freecodecamp.org/portuguese/news/date-now-em-javascript-como-obter-a-data-atual-em-javascript/
}

// função sem parâmetro e com retorno
function caracterAleatorio () {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // 61 itens
    const nAleatorio = Math.floor(Math.random() * (61 - 0) + 0); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const caracter = characters.charAt(nAleatorio); 
    return caracter;
    // https://www.programiz.com/javascript/examples/generate-random-strings
}

// função com parâmetro sem retorno
function olaNome (nome = 'não foi inserido um nome') {
    console.log('Olá ' + nome);
}

// função com parâmetro com retorno
function soma (n1 = 0, n2 = 0) {
    return n1 + n2;
}

// Chamada de função sem parâmetro e sem retorno
data();

// chamada de função sem parâmentro e com retorno
console.log(caracterAleatorio());

// chamada de função com parâmetro sem retorno
olaNome('Ewerton');

// chamada de função com parâmetro e com retorno
const resultado = soma(1, 2);
console.log(resultado);