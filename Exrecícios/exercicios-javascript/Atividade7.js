const frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];
console.log(`Array inicial: ${frutas}`);
const frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(`1. Em maiúsculas: ${frutasMaiusculas}`);
const frutasComA = frutas.filter(fruta => fruta.startsWith("A"));
console.log(`2. Frutas que começam com 'A': ${frutasComA}`);
const tamanhos = frutas.map(fruta => fruta.length);
console.log(`3. Tamanhos das strings: ${tamanhos}`);
