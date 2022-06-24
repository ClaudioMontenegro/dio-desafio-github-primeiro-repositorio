// solução 1

function verificaPalidromo(string){
    if(!string) return "Não é palindromo";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalidromo("aibofobia"))

// solução 2

function verificaPalidromo2(string) {
    if(!string) return "Não é palindromo";

    if(string.split("").reverse().join("") === string){
     
    return `É uma palindromo chamado ${string} e poussi ${string.length} letras`

    }
}
console.log(verificaPalidromo2("aibofobia"))

// solução 3

function verificaPalidromo3(string) {
    if(!string) return "Não é palindromo";
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
        return `É uma palindromo chamado ${string} e poussi ${string.length} letras`
    }

    console.log(verificaPalidromo3("aibofobia"))

    console.log(verificaPalidromo3("ayaka"))
