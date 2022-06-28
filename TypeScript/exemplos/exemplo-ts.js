"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumero(numero1, numero2, devPrinter, fraseUm) {
    let resultado = numero1 + numero2;
    if (devPrinter) {
        console.log(fraseUm + resultado);
    }
    return numero1 + numero2;
}
let devPrinter = true;
let fraseUm = "O valor é: ";
if (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devPrinter, fraseUm));
        }
    });
}
