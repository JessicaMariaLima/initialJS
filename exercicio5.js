let nomeVendedor = "João";
let salarioFixo = 500.00;
let totalVendas = 1230.30;
let comissao = 0.15

let valorReceber = (totalVendas * comissao) + salarioFixo;

console.log("TOTAL = R$" + valorReceber.toFixed(2));