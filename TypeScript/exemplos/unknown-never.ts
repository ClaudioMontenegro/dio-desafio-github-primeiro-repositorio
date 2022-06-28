let anyEstarDeVolta: any;
anyEstarDeVolta = 3;
anyEstarDeVolta = "teste"
anyEstarDeVolta = false

let stringTeste: string = "verificar"

anyEstarDeVolta = anyEstarDeVolta


let unknownValor: unknown;
unknownValor = 3;
unknownValor = "opa";
unknownValor = true;
unknownValor = "vai sim";

let stringTeste2: string = "agora vai";

if(typeof unknownValor === 'string'){
    stringTeste2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never { //never: codigo que nunca termina
    throw {error: erro, code: codigo};
}

jogaErro('deu erro no codigo', 500)
