/*Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha
incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser
impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002.
LISTA 3*/
let teclado = require(`prompt-sync`)();

let senha: number = parseInt(teclado(`Digite a senha: `));

while (senha !== 2002) {
    console.log(`Senha Invalida`);
    senha = parseInt(teclado(`Digite a senha: `));
}

console.log(`Acesso Permitido`);


