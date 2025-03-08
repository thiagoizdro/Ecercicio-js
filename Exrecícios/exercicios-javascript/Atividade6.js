function manipularArray(numeros) {
    console.log(`Array inicial: ${numeros}`);
    numeros.push(60);
    console.log(`1. Adicionado 60 ao final: ${numeros}`);
    numeros.shift();
    console.log(`2. Removido o primeiro número: ${numeros}`);
    const maior = Math.max(...numeros);
    console.log(`3. Maior número: ${maior}`);
    const menor = Math.min(...numeros);
    console.log(`4. Menor número: ${menor}`);
}
const numerosTeste = [10, 20, 30, 40, 50];
manipularArray(numerosTeste);
