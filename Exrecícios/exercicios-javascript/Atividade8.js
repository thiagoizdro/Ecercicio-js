const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};
console.log("Objeto inicial:", pessoa);
pessoa.profissao = "Engenheiro";
console.log("1. Adicionada propriedade 'profissao':", pessoa);
delete pessoa.cidade;
console.log("2. Removida propriedade 'cidade':", pessoa);
const propriedades = Object.keys(pessoa);
console.log("3. Propriedades do objeto:", propriedades);
