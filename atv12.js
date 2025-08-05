/*Fazer um programa para ler um número inteiro positivo N. O programa deve então mostrar na tela N linhas,
começando de 1 até N. Para cada linha, mostrar o número da linha, depois o quadrado e o cubo do valor, conforme
exemplo.
Lista 4*/
var teclado = require("prompt-sync")();
var numero = parseInt(teclado("Digite um número inteiro positivo: "));
for (var i = 1; i <= numero; i++) {
    var quadrado = i * i;
    var cubo = i * i * i;
    console.log(i + " " + quadrado + " " + cubo);
}
