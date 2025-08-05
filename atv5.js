/*Fazer um programa para ler um número inteiro e dizer se este número é par ou ímpar.
LISTA 2*/
var teclado = require('prompt-sync')();
var contador = 1;
var pares = 0;
var impares = 0;
var n = parseInt(teclado("Digite um número inteiro: "));
if (n % 2 == 0) {
    console.log("par");
}
else {
    console.log("\u00EDmpar");
}
