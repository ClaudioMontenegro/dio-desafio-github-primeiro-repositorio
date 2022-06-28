function numbersSoma(arr) {
    return arr.reduce(function (prev, current) {
        console.log({prev});
        return prev + current; 
    });
}

const soma = [10, 222];

console.log(numbersSoma(soma));

//

const listy = [
{
    product: 'bencao',
    preco: 27.80,

},

{
    product: 'passe',
    preco: 54.80,

},

{
    product: '300xgemas',
    preco: 27.80,

}

]
const disponível = 120


function quantoGasto (disponível, listy){
    return listy.reduce(function (prev, current, index){
        console.log('rodada', index + 1);
        console.log( { prev } );
        console.log( { current } );
        return prev - current.preco;
    }, disponível);
}

console.log(quantoGasto(disponível, listy));