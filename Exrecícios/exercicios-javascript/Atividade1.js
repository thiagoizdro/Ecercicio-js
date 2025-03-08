const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma string: ', (inputString) => {
    console.log(`\n1. Maiuscula: ${inputString.toUpperCase()}`);
    console.log(`2. minuscula: ${inputString.toLocaleLowerCase()}`);
    console.log(`3. invertida: ${inputString.split('').reverse().join()}`)

    rl.question('\nDigite a letra que dejesa substituir: ', (charToReplace) => {
        rl.question('Digite a nova letra: ', (newChar) => {
            const modifiedString = inputString.split(charToReplace).join(newChar);
            console.log(`4. substituindo '${charToReplace})' por '${newChar}': ${modifiedString}`);
            
            rl.close();
        });
    });
});
