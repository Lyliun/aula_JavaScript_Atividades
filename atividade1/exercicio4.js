import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const perguntar = (texto) =>
  new Promise((res) => rl.question(texto, (r) => res(Number(r.replace(",", ".")))));

const calc = async () => {
  const nums = [];
  for (let i = 1; i <= 4; i++) nums.push(await perguntar(`Digite o número ${i}: `));

  const diferenca = (nums[0] * nums[1]) - (nums[2] * nums[3]);

  console.log(`\n🔹 Diferença entre os produtos: ${diferenca.toFixed(2)}`);
  rl.close();
};

calc();