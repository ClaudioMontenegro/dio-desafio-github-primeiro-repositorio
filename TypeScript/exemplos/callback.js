"use strict";
function printValorNumerico(numero1, numero2) {
    console.log(numero1 + numero2); // funções que não retornam nada: void 
}
function somarValoresNumericos(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMemso(numero) {
    return numero / numero;
}
console.log(somarValoresNumericos(1, 3, aoQuadrado));
console.log(somarValoresNumericos(1, 3, dividirPorEleMemso));
