import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o número: ", (n1) => {
  const numero = parseInt(n1);

  if (numero % 2 == 0 && numero > 0) {
    console.log(`O número ${numero} é par e positivo.`);
  } else if (numero % 2 == 0 && numero < 0) {
    console.log(`O número ${numero} é par e negativo.`);
  }

  if (numero % 2 != 0 && numero > 0) {
    console.log(`O número ${numero} é ímpar e positivo.`);
  } else if (numero % 2 != 0 && numero < 0) {
    console.log(`O número ${numero} é ímpar e negativo.`);
  }

  rl.close();
});