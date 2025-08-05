/*Fazer um programa para ler um número inteiro positivo N. O programa deve então mostrar na tela N linhas,
começando de 1 até N. Para cada linha, mostrar o número da linha, depois o quadrado e o cubo do valor, conforme
exemplo.
Lista 4*/
let teclado = require("prompt-sync")();


let numero: number = parseInt(teclado("Digite um número inteiro positivo: "));


for (let i = 1; i <= numero; i++) {
    let quadrado = i * i;
    let cubo = i * i * i;

    console.log(i + " " + quadrado + " " + cubo);
}

