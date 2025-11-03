import readline from 'readline-sync';

const numeros = [];

console.log("Digite 10 numeros inteiros para preencher o vetor: ");

for (let i = 0; i < 10; i++) {
    const numero = parseInt(readline.question(`Numero ${i + 1}: `));
    numeros.push(numero);
}

console.log("Vetor preenchido:", numeros);

const numeroDigitado = parseInt(readline.question("Digite um numero para pesquisar: "));

const posicao = numeros.indexOf(numeroDigitado);

if (posicao !== -1) {
    console.log(`O numero ${numeroDigitado} foi encontrado na posição ${posicao} do vetor.`);
} else{
    console.log(`O numero ${numeroDigitado} não foi encontrado no vetor.`);
}