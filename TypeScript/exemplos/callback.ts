function printValorNumerico(numero1: number, numero2: number): void {
    console.log(numero1 + numero2); // funções que não retornam nada: void 
}

function somarValoresNumericos (numero1: number, numero2: number, callback: (numero: number) => number): number{
    let resultado = numero1 + numero2;

    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMemso (numero: number): number{
    return numero/numero
}

console.log(somarValoresNumericos(1, 3, aoQuadrado))
console.log(somarValoresNumericos(1, 3, dividirPorEleMemso))
