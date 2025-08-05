/*Faça um programa para ler dois valores inteiros, e depois mostrar na tela a soma desses números com uma
mensagem explicativa, conforme exemplos.
LISTA 1*/

let teclado = require(`prompt-sync`)();

let a: number = parseInt(teclado(`Digite o primeiro número inteiro: `));
let b: number= parseInt(teclado(`Digite o segundo número inteiro: `));

let soma : number = a + b;
console.log(`A soma de ${a} e ${b} é: ${soma}`);

