/*Faça um programa para ler dois valores inteiros, e depois mostrar na tela a soma desses números com uma
mensagem explicativa, conforme exemplos.
LISTA 1*/
var teclado = require("prompt-sync")();
var a = parseInt(teclado("Digite o primeiro n\u00FAmero inteiro: "));
var b = parseInt(teclado("Digite o segundo n\u00FAmero inteiro: "));
var soma = a + b;
console.log("A soma de ".concat(a, " e ").concat(b, " \u00E9: ").concat(soma));
