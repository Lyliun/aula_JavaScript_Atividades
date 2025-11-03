import readline from 'readline-sync';

let numero;
let somaPositivo = 0;

do {
    numero = parseInt(readline.question("Digite um numero (Digite 0 caso queira encerrar): "));

    if (numero > 0) {
        somaPositivo += numero;
    }else if (numero < 0) {
        console.log("Numero inválido! Por favor, digite apenas numeros positivos ou 0 para encerrar.");
    }
} while (numero !== 0);

console.log(`A soma dos numeros positivos é: ${somaPositivo}`);