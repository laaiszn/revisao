/*Fazer um programa para ler quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto
de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).*/
var teclado = require("prompt-sync")();
var A = parseInt(teclado("Digite o valor de A: "));
var B = parseInt(teclado("Digite o valor de B: "));
var C = parseInt(teclado("Digite o valor de C: "));
var D = parseInt(teclado("Digite o valor de D: "));
var diferenca = (A * B) - (C * D);
console.log("DIFERENCA = " + diferenca);
