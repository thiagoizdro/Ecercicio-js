import moment from "moment";
import { soma, subtracao, multiplicacao, divisao } from "./calculadora.js";

console.log("soma: ", soma(10, 5));
console.log("subtração: ", subtracao(10, 5));
console.log("multiplicação: ", multiplicacao(10, 5));
console.log("divisão: ", divisao(10, 5));

function calculadoraIdade(anoNascimento) {   
    const hoje = moment();
    const nascimento = moment(anoNascimento, 'YYYY');
    return hoje.diff(nascimento, 'years');
}

const anoNascimento = 2005;
const idade = calculadoraIdade(anoNascimento);
console.log(`idade: ${idade} anos`);