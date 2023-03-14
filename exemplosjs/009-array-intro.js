
console.log('Exemplo array');
let notas = [9, 8.5, 7];
console.log(notas);
console.log('1ª nota: ' + notas[0]);
console.log('2ª nota: ' + notas[1]);
console.log('3ª nota: ' + notas[2]);

// editar posições do array
notas[0] = 'MB';
notas[1] = 'MB';
notas[2] = 'B';
console.log('Notas convertidas:');
console.log(notas[0] + ' - ' + notas[1] + ' - ' + notas[2]);

let alunos = [
    {
        nome: 'Sebastião da Silva', 
        dt_nasc: '11/11/1957', 
        sexo: 'M'
    }, 
    {
        nome: 'Sebastiãna da Silva', 
        dt_nasc: '10/01/1959', 
        sexo: 'F'
    }, 
    {
        nome: 'Tião da Silva', 
        dt_nasc: '01/12/1977', 
        sexo: 'M'
    }, 
    {
        nome: 'Tiãna da Silva', 
        dt_nasc: '22/06/1970', 
        sexo: 'F'
    }
];

console.log('3º aluno: ');
console.log('Nome: ' + alunos[2].nome);
console.log('Data de Nascimento: ' + alunos[2].dt_nasc);
console.log('Sexo: ' + alunos[2].sexo);

