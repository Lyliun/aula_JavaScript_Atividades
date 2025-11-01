import readline from 'readline';

// Cria a interface de entrada e saída

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Faz a pergunta ao usuário

rl.question('Digite o salário do funcionário: ', (salario) => {
    rl.question('Digite o valor do abono: ', (abono) => {
        let resultado = Number(salario) + Number(abono);
        console.log("Novo Salário: " + resultado);
        rl.close();
    });
});