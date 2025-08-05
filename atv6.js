var teclado = require('prompt-sync')();
var codigo = parseInt(teclado("Digite o código do item: "));
var quantidade = parseInt(teclado("Digite a quantidade: "));
var preco = 0;
if (codigo == 1) {
    preco = 4.00;
}
else if (codigo == 2) {
    preco = 4.50;
}
else if (codigo == 3) {
    preco = 5.00;
}
else if (codigo == 4) {
    preco = 2.00;
}
else if (codigo == 5) {
    preco = 1.50;
}
else {
    console.log("Código inválido");
}
if (preco > 0) {
    var total = preco * quantidade;
    console.log("Total: R$ " + total);
}
