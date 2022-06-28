
function testErros1 (arr1, num){
    try{

    if (!arr1 && !num) 
        throw new ReferenceError("Envie os parâmetros");

    if(typeof arr1 !== 'object') 
        throw new TypeError("O array precisa ser do tipo Object");

    if(typeof num !== 'number') 
        throw new TypeError("O num precisa ter ser do tipo número");

    if(arr1.length !== num) throw new RangeError("Tamanho inválido");

    return arr1;

}
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este é um error do tipo ReferenceError!");
            console.log(e.message)
        } else if(e instanceof TypeError){
            console.log("Este é um error do tipo TypeError!");
            console.log(e.message)
        } else if(e instanceof RangeError){
            console.log("Este é um error do tipo RangeError!");
            console.log(e.message)
        } else{
            console.log("Tipo de erro não esperado:" + e);
        }
    }

}

console.log(testErros1([1], 2))