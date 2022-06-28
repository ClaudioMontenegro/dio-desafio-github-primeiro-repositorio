"use strict";
let anyEstarDeVolta;
anyEstarDeVolta = 3;
anyEstarDeVolta = "teste";
anyEstarDeVolta = false;
let stringTeste = "verificar";
anyEstarDeVolta = anyEstarDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = "opa";
unknownValor = true;
unknownValor = "vai sim";
let stringTeste2 = "agora vai";
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro no codigo', 500);
