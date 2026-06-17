let nome = String(prompt("Digite seu nome"));
let renda = Number(prompt("Digite sua renda"));
let quantidadeDespesas = Number(prompt("Digite a quantidade de despesas"));
while(isNaN(quantidadeDespesas)){
    let quantidadeDespesas = Number(prompt("Digite a quantidade de despesas"));
}
if (quantidadeDespesas > 5){
    quantidadeDespesas = 5;
}
let total;
for(let i = 1; i <= quantidadeDespesas; i++){
    let despesa = Number(prompt("Digite a despesa ", i));
    total += despesa;
}
    