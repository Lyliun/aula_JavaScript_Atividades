import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o código do item(1-6): ", (codigo) => {
    rl.question("Digite a quantidade: ", (quantidade) => {

        const cod = parseInt(codigo);
        const qtd = parseInt(quantidade);
        let preco = 0;
        let produto;

        switch(cod) {
            case 1:
                produto = "Cachorro Quente"
                preco = 10.00;
                break;
            
            case 2:
                produto = "X-Salada"
                preco =  15.00;
                break;

            case 3:
                produto = "X-Bacon"
                preco = 18.00;
                break;

            case 4:
                produto = "Bauru"
                preco = 12.00;
                break;

            case 5:
                produto = "Refrigerante"
                preco = 8.00;
                break;

            case 6:
                produto = "Suco de Laranja"
                preco = 13.00;
                break;
            default:
                console.log("Código inválido! Digite um código entre 1 a 6.");
                rl.close();
                return;
        }

        const total = preco * qtd;
        
        console.log(`\nVocê comprou ${qtd} unidade(s) de ${produto}.`);
        console.log(`\nValor total: R$ ${total.toFixed(2)}`);

        rl.close();
    });
})