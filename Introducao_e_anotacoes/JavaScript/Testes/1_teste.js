// var y = 0; (comentário //)
/* (comentários maiores)
var x = 0;

var y = 2;
*/

/* ax + b = 0 função do primeiro grau

ab são constantes, x é uma variável

*/

// var preco = 2;
var desconto = 0.2;

// preco = preco - desconto;

const PRECO = 2; // constantes são declaradas com CAIXA ALTA

var total = PRECO - desconto;


// funções

function soma(/*parametros*/ a, b) {
    console.log(a + b) // quando você só quer ver o retorno da função - debug - ver o codigo rodando
    return a + b; // quando você precisa manipular o resultado dessa função em outra
}

soma(3, 5); // chamando uma função - resultado: 8 (a + b = 8)






