/*Fazer um programa para ler um número inteiro e dizer se este número é par ou ímpar.
LISTA 2*/

let teclado = require('prompt-sync')();
let contador= 1;
let pares=0;
let impares= 0;

let n = parseInt(teclado("Digite um número inteiro: "));

if(n % 2 == 0) {
    console.log(`Número Par`);
} else {
    console.log(`Número Ímpar`);
}