/*Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema
cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo
menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).
Lista 3*/


let teclado = require('prompt-sync')();

let x: number = parseInt(teclado(`Digite o valor de X: `));
let y: number = parseInt(teclado(`Digite o valor de Y: `));

while (x !== 0 && y !== 0) {
    if (x > 0 && y > 0) {
        console.log(`primeiro`);
    } else if (x < 0 && y > 0) {
        console.log(`segundo`);
    } else if (x < 0 && y < 0) {
        console.log(`terceiro`);
    } else if (x > 0 && y < 0) {
        console.log(`quarto`);
    }

    x = parseInt(teclado(`Digite o valor de X: `));
    y = parseInt(teclado(`Digite o valor de Y: `));
}