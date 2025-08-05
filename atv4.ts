/*Fazer um programa para ler um número inteiro, e depois dizer se este número é negativo ou não.
    LISTA 2 */

let teclado = require('prompt-sync')();

let numero = parseInt(teclado("Digite um número inteiro: "));

if (numero < 0) {
    console.log("NEGATIVO");
} else {
    console.log("NAO NEGATIVO");
}


