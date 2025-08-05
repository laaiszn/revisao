/*Fazer um programa para ler um número inteiro, e depois dizer se este número é negativo ou não.
    LISTA 2 */
var teclado = require('prompt-sync')();
var numero = parseInt(teclado("Digite um número inteiro: "));
if (numero < 0) {
    console.log("NEGATIVO");
}
else {
    console.log("NAO NEGATIVO");
}
