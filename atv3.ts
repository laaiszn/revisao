/*Fazer um programa para ler quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto
de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).
LISTA1*/
let teclado = require(`prompt-sync`)();

let A: number = parseInt(teclado("Digite o valor de A: "));
let B: number = parseInt(teclado("Digite o valor de B: "));
let C: number = parseInt(teclado("Digite o valor de C: "));
let D: number = parseInt(teclado("Digite o valor de D: "));


let diferenca: number = (A * B) - (C * D);


console.log("DIFERENCA = " + diferenca);