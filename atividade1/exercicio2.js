import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite as notas do aluno: ', (entrada) => {
    let notas = entrada.split (" ").map(Number);
    let media = notas.reduce((total, n) => total + n, 0) / notas.length;
    console.log("Média do Aluno: " + media.toFixed(2));
    rl.close();
});