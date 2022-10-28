/*
Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 
*/
/* alert('Exercício 01');
let nota = parseInt(prompt('Digite uma nota de 0 a 10:'));
while (nota > 10) {
    alert('Valor inválido.');
    nota = parseInt(prompt('Digite uma nota de 0 a 10:'));
}
alert('Valor válido'); */

/*
Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
*/

alert('Exercício 02');
let nome = prompt('Digite seu nome:');
let senha = prompt('Digite sua senha:');

/* if (nome == senha) {
    alert('Sua senha deve ser diferente do seu nome. Digite seus dados novamente.');
    nome = prompt('Digite seu nome:');
    senha = prompt('Digite sua senha:');
} else {
    alert(`Acesso liberado`);    
} */

while (nome == senha) {
    alert('Sua senha deve ser diferente do seu nome. Digite seus dados novamente.');
    nome = prompt('Digite seu nome:');
    senha = prompt('Digite sua senha:');
}
alert(`Acesso liberado`);

/* Faça um programa que enquanto a entrada for números inteiros positivos, menores que 10, continue somando. Quando um valor negativo ou maior que 10 for informado, pare a execução, alerte a soma e a média. */

