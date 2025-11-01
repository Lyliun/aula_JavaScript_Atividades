import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const perguntar = (texto) =>
  new Promise((res) => rl.question(texto, (r) => res(Number(r.replace(",", ".")))));

const calc = async () => {
  const salario = await perguntar("Salário bruto: ");
  const adicional = await perguntar("Adicional noturno: ");
  const horas = await perguntar("Horas extras: ");
  const descontos = await perguntar("Descontos: ");

  const liquido = salario + adicional + (horas * 5) - descontos;

  console.log("\n💰 Salário Líquido:", liquido.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  }));

  rl.close();
};

calc();