/*Ler um número inteiro N e calcular todos os seus divisores.
LISTA 4*/
var teclado = require('prompt-sync')();
var n = parseInt(teclado("Digite um número: "));
for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}
