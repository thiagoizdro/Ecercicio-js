const livro = {
    titulo: "Homem aranha",
    autor: "Thiago",
    ano: 1954
};
const { titulo, autor } = livro;
console.log(`1. Título: ${titulo}, Autor: ${autor}`);
function descricaoLivro(livro) {
    return `O livro "${livro.titulo}" foi escrito por ${livro.autor}.`;
}
console.log(`2. ${descricaoLivro(livro)}`);
