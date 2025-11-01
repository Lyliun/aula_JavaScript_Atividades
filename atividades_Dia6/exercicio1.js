import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro número: ", (n1) => {
    rl.question("Digite o segundo número: ", (n2) => {
        rl.question("Digite o terceiro número: ", (n3) => {

            const numero1 = parseInt(n1);
            const numero2 = parseInt(n2);
            const numero3 = parseInt(n3);

            const somaAB = numero1 + numero2;

            if (somaAB > numero3) {
                console.log(`A soma de ${numero1} + ${numero2} é maior que ${numero3}`);
            } else if (somaAB < numero3) {
                console.log(`A soma de ${numero1} + ${numero2} não é maior que ${numero3}`);
            } else if (somaAB === numero3) {
                console.log(`A soma de ${numero1} + ${numero2} é igual a ${numero3}`);
            } else {
                console.log("Números inválidos");
            }

            rl.close();
        })
    })
})