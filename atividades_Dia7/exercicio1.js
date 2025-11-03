import readline from 'readline-sync';

const num1 = parseInt(readline.question("Digite o primeiro numero: "));
const num2 = parseInt(readline.question("Digite o segundo numero: "));

if (num1 > num2) {
    console.log(`Intervalo invalido! O primeiro numero (${num1}) deve ser menor que o segundo número (${num2}).`);
    process.exit();
}

const multiplos = []; // Extra: Array para armazenar os múltiplos de 3 e 5

for (let i = num1; i <= num2; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    multiplos.push(i);
  }
}

console.log(`Múltiplos de 3 e 5 entre ${num1} e ${num2}: ${multiplos.join(", ")}`);