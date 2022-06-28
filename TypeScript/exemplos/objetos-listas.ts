
enum Profissao {
    Sacerdotisa,
    Arconte,
    Aventureiro,
    Farmaceutico
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const Yae = {
    nome: "Yae Miko",
    idade: 500,
    profissao: Profissao.Sacerdotisa
}

interface Estudante extends Pessoa {
    materiais: string[]

}

const jessica: Estudante = {
    nome: "Jessica",
    idade: 28,
    profissao: Profissao.Farmaceutico,
    materiais: ['Introdução a ervas', 'Vale de Liyue: Guia', 'Tubos de ensaio']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log ('- ', item);
    }
}

listar(jessica.materiais);
