const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log("1. Números pares:", numerosPares);
const numerosMultiplicados = numerosPares.map(num => num * 2);
console.log("2. Números multiplicados por 2:", numerosMultiplicados);
const soma = numerosMultiplicados.reduce((acc, num) => acc + num, 0);
console.log("3. Soma dos números obtidos:", soma);
