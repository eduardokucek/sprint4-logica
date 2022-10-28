// Escreva uma função que apresente como resultado os quadrados dos números inteiros existentes na faixa de valores de 15 a 200.

// Exemplo:
// chamada da função: funcao_o_nome_da_sua_funcao()
// Saída: 225, 256, 289 ...40000
//console.log('Exercício 01:');
function quadradosInteiros () {
    let quadrado = 0
    for (let i = 15; i <= 200; i++) {
        quadrado = i ** 2;
        console.log(quadrado);
    }
}
//quadradosInteiros();


// Escreva uma função que apresente a soma dos cem primeiros números naturais.
// (1+2+3+...+98+99+100).

// Exemplo:
// chamada da função: funcao_o_nome_da_sua_funcao()
// Saída: 5.050
//console.log('Exercício 02:');
function somaNaturais () {
    let soma = 0;
    for (let i = 1; i <= 100; i++) {
        soma = i + soma; // soma recebe o valor da soma de i pelo próprio valor da soma anterior. soma = 1 + 0 (soma = 1); soma = 2 + 1 (soma = 3); soma = 3 + 3 (soma = 6); soma = 4 + 6 (soma = 10); soma = 5 + 10 (soma = 15); soma = 6 + 15 (soma = 21) ...
    }
    console.log(soma);
}
//somaNaturais();

// Escreva uma função que apresente todos os valores numéricos divisíveis por 4 e menores que 200.

// Exemplo:
// chamada da função: funcao_o_nome_da_sua_funcao()
// Saída: 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ...196
//console.log('Exercício 03:');
function divisiveisPorQuatro() {
    for (let i = 0; i < 200; i++) {
        if (i % 4 == 0) {
            console.log(i);
        }
    }
}
//divisiveisPorQuatro();

// Escreva uma função que não recebe parâmetros, para ler dez valores numéricos reais e retornar a soma de todos os valores lidos.

// Some os valores acumulativamente, use estrutura de repetição para receber um novo valor a cada interação do usuário.

// Pense em uma forma para que sua função retorne o resultado, somente quando a laço iterar dez vezes.

// Apresente no final o somatório e a média aritmética dos valores lidos.

// Use o seguinte formato de saída: "A soma dos valores é: x e a média é: y".
// Onde x é o valor da soma é y é o valor da média.

// Lembre-se de chamar a função, para conferir o funcionamento.
// ⁠
// Escreva uma função que calcule o resultado da soma e da média aritmética dos valores pares situados na faixa numérica de 50 até 70.

// soma = 50+52+54...70
// média_aritmética = soma / numeros_pares_no_intervalo

// Escreva uma função que apresente os resultados da soma e da média aritmética dos valores ímpares situados na faixa numérica de 50 até 70.

// soma = 51+53+55...69
// média_aritmética = soma / numeros_ímpares_no_intervalo

// Elaborar uma função que apresente os valores de conversão de graus Celsius em graus Fahrenheit, a cada dez graus.

// Iniciando a contagem em dez graus Celsius e finalizando em cem graus Celsius.

// O programa deve apresentar os valores das duas temperaturas.

// Exemplo:
// chamada da função: funcao_o_nome_da_sua_funcao()
// Saída: 10c = 50f, 20c = 68f, 30c = 86f

// Neste exercício, você precisará tratar o valor de saída convertendo para o tipo string para se adaptar ao formato correto.
