/*Faça um programa para ler o valor do raio de um círculo, e depois mostrar o valor da área deste círculo com quatro
casas decimais conforme exemplos.
Fórmula da área: area = π . raio2
Considere o valor de π = 3.14159
LISTA 1*/
var teclado = require('prompt-sync')();
var raio = parseFloat(teclado("Digite o valor do raio do círculo: "));
var pi = 3.14159;
var area = pi * (raio * raio);
console.log("O valor da \u00E1rea \u00E9 ".concat(area));
