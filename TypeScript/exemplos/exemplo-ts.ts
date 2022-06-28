let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumero(numero1: number, numero2: number, devPrinter: boolean, fraseUm: string) {
    let resultado = numero1 + numero2
   if (devPrinter) {

        console.log(fraseUm + resultado)
    }
    return numero1 + numero2
}

let devPrinter = true;

let fraseUm = "O valor é: ";

if(button){


button?.addEventListener("click", () => {
    if (input1 && input2) {
        console.log(adicionarNumero(Number(input1.value), Number(input2.value), devPrinter, fraseUm));
    }
})
}
