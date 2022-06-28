"use strict";
function somaValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toLocaleString() + input2.toLocaleString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somaValores(1, 5));
console.log(somaValores("Olá", ",como vai?"));
console.log(somaValores(1, "  decimo"));
