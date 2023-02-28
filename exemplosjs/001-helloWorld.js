
// comentário de uma linha
console.log('Estou desenvolvendo em java-script');

/*
    comentário de mais de 
    uma linha
    Três formas de declarar uma variável em java-script
    (var, let e const)
*/

let nome = 'Ewerton'; 
let idade = 35;
let trabalha = true;
let alturaPessoa = 1.76;
let altura_pessoa = '1.76'; // nº entre aspas é string
let coresFavoritas = ['roxo', 'preto', 'laranja', 'verde']; // array
let endereco = {
    logradouro : 'Avenida', 
    nmLog : 'Brasil', 
    num : '200-A', 
    bairro : 'Centro'
}; // objeto
let covid = null;
let dengue;

console.log(alturaPessoa); 
console.log('Nome: ' + nome); 
console.log('O ' + nome + ' tem ' + idade + ' anos.');
console.log('');;
console.log('----------------------------');
console.log(typeof(coresFavoritas)); 
const ehArray = Array.isArray(coresFavoritas);

console.log(ehArray === true ? 'É um array' : 'Não é um array');

if (ehArray === true) {
    console.log('É um array');
} else {
    console.log('Não é um array');
}
