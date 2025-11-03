import readline from 'readline-sync';

let menores21 = 0;
let maiores50 = 0;
let idade = 0;

console.log("Comparador de Idades");
console.log("Digita as idades uma de cada vez. ")
console.log("Digite um numero negativo para encerrar.");

idade = parseInt(readline.question("Digite uma idade: "));

while (idade > 0) {
    if (idade < 21) {
        menores21++;
    } else if (idade > 50) {
        maiores50++;
    }

    idade = parseInt(readline.question("Digite uma idade: "));
}

console.log("\n📊 Resultado final: ");
console.log(`Total de pessoas com menos de 21 anos: ${menores21}`);
console.log(`Total de pessoas com mais de 50 anos: ${maiores50}`);