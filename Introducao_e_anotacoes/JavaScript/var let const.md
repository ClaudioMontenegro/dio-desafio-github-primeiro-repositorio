 
 # Atribuindo valores
 
  
 > var, let e const são **DECLARAÇÕES** que atribuem **VALORES**
 
 ![](https://imgur.com/PoKzG0G.jpg)
 
 ![](https://imgur.com/NiLl4Rk.jpg)
 
 - var é global, let só irá funcionar dentro do bloco if
 - Hoisting: atribuir valores as variáveis antes de declara-las;
 
 - Redeclaração 

        var a = 1;
    
        if (a === 1){
      
        var a = 11
        }
    
     
 - Reatribuição
 
        var a = 1;
        var b = 2;
        
        function soma(a, b){
            a = 4
            b = 5

            return a + b;
        }
        
        console.log(soma(a, b)) //9
        
        
     
  EXEMPLO:
  
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
            return `A poderosíssima ${ARCONTE} irá te eliminar ao lançar a ult ${ELEMENTALPOWER} apenas uma vez`
        }
    }
    
    console.log(chracterDescribe(ARCONTE, ELEMENTAL_POWER)) // chama a declaração e dá os valores
    
    // A poderosíssima Raiden Shogun irá te eliminar ao lançar a ult Electro apenas uma vez


    // para rodar códigos, é mais seguro usar o let, pois o var é global e pode complicar
    
## Constantes

![](https://imgur.com/Yixqioq.jpg)

// const FIRST_NAME = 'Arataki' const precisa ser inicializada

//FIRST_NAME = 'Itto'       NÃO PODE, pois é constante

## var let const

![](https://imgur.com/07xdALa.jpg)



    