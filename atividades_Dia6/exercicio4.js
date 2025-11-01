import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Calculadora Simples da Lilia");
console.log("Escolha a operação: ");
console.log("1 - Adição (+)");
console.log("2 - Subtração (-)");
console.log("3 - Multiplicação (*)");
console.log("4 - Divisão (/)");
console.log("---------------------------");

rl.question("Digite o primeiro número: ", (n1) => {
    rl.question("Digite o segundo número: ", (n2) => {
        rl.question("Qual operação deseja realizar (1-4): ", (operacao) => {

            const numero1 = parseInt(n1);
            const numero2 = parseInt(n2);
            const op = parseInt(operacao);
            let resultado;

            switch (op) {
                case 1:
                    resultado = numero1 + numero2;
                    console.log(`O resultado da adição é: ${resultado}`);
                    break;

                case 2:
                    resultado = numero1 - numero2;
                    console.log(`O resultado da subtração é: ${resultado}`);
                    break;

                case 3:
                    resultado = numero1 * numero2;
                    console.log(`O resultado da multiplicação é: ${resultado}`);
                    break;

                case 4:
                    if (numero2 === 0) {
                        console.log("Erro: Divisão por zero não é permitida.");
                    } else {
                        resultado = numero1 / numero2;
                        console.log(`O resultado da divisão é: ${resultado}`);
                    }
                    break;
            }

            rl.close();
        });
    });
});