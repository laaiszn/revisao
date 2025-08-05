/*Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A
seguir, calcule e mostre o valor da conta a pagar.
Lista 2*/


let teclado = require('prompt-sync')();

let codigo: number = parseInt(teclado("Digite o código do item: "));
let quantidade:number = parseInt(teclado("Digite a quantidade: "));
let preco:number = 0;

if (codigo == 1) {
    preco = 4.00;
} else if (codigo == 2) {
    preco = 4.50;
} else if (codigo == 3) {
    preco = 5.00;
} else if (codigo == 4) {
    preco = 2.00;
} else if (codigo == 5) {
    preco = 1.50;
} else {
    console.log("Código inválido");
}

if (preco > 0) {
    let total = preco * quantidade;
    console.log("Total: R$ " + total);
}