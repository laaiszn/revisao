/*Ler um número inteiro N e calcular todos os seus divisores.
LISTA 4*/

let teclado = require('prompt-sync')();

let n = parseInt(teclado("Digite um número: "));

for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}