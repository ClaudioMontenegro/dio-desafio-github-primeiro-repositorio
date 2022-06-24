numberOne = 1; // atribuição de uma variável ainda não declarada

console.log(numberOne + 2);

var numberOne; // declaração da variável

// let numberOne;  não iria funcionar, pois let não é global

var firstName = 'João';
var lastName = 'Souza';

if(firstName === 'João') { //if será sempre ===
    var firstName = 'Pedro'; // redeclaração
    let lasName = 'Silva'; // redeclaração 

}

console.log(firstName, lastName)

// Pedro Souza, pois 'let' só funcionará dentro do if(){}

var raidenShogun = 'Arconte';
var elementalVision = 'Electro';


if(raidenShogun === 'Arconte' && elementalVision === 'Electro') {
    var raidenShogun = 'Arconte';
    elementalVision = 'Quem se importa?' // reatribuição
}

console.log(raidenShogun, elementalVision) // Arconte Quem se importa?, reatribuição é global

const ARCONTE = 'Raiden Shogun'; //criei uma constante e dei valores (strings) fixos 
const ELEMENTAL_POWER = 'Electro';

function chracterDescribe(ARCONTE, ELEMENTAL_POWER){ // declarei uma função
    if(ARCONTE === 'Raiden Shogun' && ELEMENTAL_POWER === 'Electro'){ //condicional
        return `A poderosíssima ${ARCONTE} irá te eliminar ao lançar a ult ${ELEMENTAL_POWER} apenas uma vez`
    }
}

console.log(chracterDescribe(ARCONTE, ELEMENTAL_POWER)) // chama a declaração e dá os valores

